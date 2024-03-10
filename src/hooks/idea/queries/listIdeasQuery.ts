import { QueryFunctionContext } from "@tanstack/react-query";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Idea, ListIdeasQuery, ListIdeasQueryVariables } from "../../../API";
import { listIdeas } from "../../../graphql/queries";
import { APIError } from "../../../infrastructure/ApiError";
import { generateClient } from "aws-amplify/api";
import { fetchAuthSession } from "aws-amplify/auth";

const client = generateClient();
export async function listIdeasQuery(
  context: QueryFunctionContext<
    [string | number, ListIdeasQueryVariables],
    string | null | undefined
  >
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_key, variables] = context.queryKey;
  const nextToken = context.pageParam;
  // get user token
  const userSession = await fetchAuthSession();
  // get their jwt token
  if (!userSession) {
    throw new Error("No user found");
  }
  try {
    const result = (await client.graphql({
      query: listIdeas,
      variables: { ...variables, nextToken },
      authMode: "iam",
      authToken: userSession.tokens?.accessToken.toString(),
    })) as GraphQLResult<ListIdeasQuery>;
    if (result.data?.listIdeas?.items) {
      return {
        ideas: result.data?.listIdeas.items as NonNullable<
          ListIdeasQuery["listIdeas"]
        >["items"] as Idea[],
        nextToken: result.data?.listIdeas.nextToken,
      };
    }
    return {
      ideas: [] as Idea[],
      nextToken: null,
    };
  } catch (e) {
    //cast to APIError
    const error = e as APIError;
    if (error.errors) {
      throw new Error(error.errors[0].message);
    }
    throw new Error("Error fetching ideas");
  }
}
