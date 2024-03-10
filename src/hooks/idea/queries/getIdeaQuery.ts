import { QueryFunctionContext } from "@tanstack/react-query";
import { GetIdeaQuery } from "../../../API";
import { getIdea } from "../../../graphql/queries";
import { isApiError } from "../../../infrastructure/ApiError";
import { GraphQLResult, generateClient } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

const client = generateClient();

export async function getIdeaQuery({
  queryKey,
}: QueryFunctionContext<["getIdea", string]>) {
  //   discard of _key as we don't need it
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_key, id] = queryKey;

  try {
    const session = await fetchAuthSession();
    // is there a session?
    if (!session) {
      // we don't have a session, we can't get the idea with the iam auth mode so we use the public mode
      const result = (await client.graphql({
        query: getIdea,
        variables: { id },
      })) as GraphQLResult<GetIdeaQuery>;
      return result?.data?.getIdea ?? null;
    }
    const authToken = session.tokens?.accessToken?.toString();

    const graphqlParams = {
      query: getIdea,
      variables: { id },
      ...(authToken && { authMode: "iam" as const, authToken }),
    };

    const result = (await client.graphql(
      graphqlParams
    )) as GraphQLResult<GetIdeaQuery>;

    return result?.data?.getIdea ?? null;
  } catch (error) {
    if (isApiError(error)) {
      throw new Error(error.errors[0].message);
    }
    throw new Error("Error fetching idea");
  }
}
