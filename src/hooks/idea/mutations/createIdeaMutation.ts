import { APIError } from "src/infrastructure/ApiError";
import { Idea, CreateIdeaMutation, CreateIdeaMutationVariables } from "src/API";
import { createIdea } from "../../../graphql/mutations";
import { GraphQLResult, generateClient } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

const client = generateClient();
/**
 * Creates an idea using the data in the variables object.
 * @param variables The object containing the data to create the idea.
 * @returns The created idea.
 */
export async function createIdeaMutation(
  variables: CreateIdeaMutationVariables
) {
  try {
    const getToken = async () => {
      const session = await fetchAuthSession();
      return session.tokens?.accessToken;
    };
    const authToken = await getToken();

    if (!authToken) {
      throw new Error("No auth token found");
    }
    const result = (await client.graphql({
      query: createIdea,
      variables: variables,
      // export type GraphQLAuthMode = 'apiKey' | 'oidc' | 'userPool' | 'iam' | 'lambda' | 'none';
      authMode: "iam",
      authToken: authToken.toString(),
    })) as GraphQLResult<CreateIdeaMutation>;
    if (result.data?.createIdea) {
      return result.data.createIdea as Idea;
    }
    throw new Error("Error creating Idea");
  } catch (e) {
    const error = e as APIError;
    if (error.errors) {
      throw new Error(error.errors[0].message);
    }
    throw new Error("Error creating Idea");
  }
}
