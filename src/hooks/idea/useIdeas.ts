import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Idea, ListIdeasQueryVariables } from "src/API";
import { listIdeasQuery } from "./queries/listIdeasQuery";
/**
 * A hook to get a list of ideas. This is an infinite query, so you can fetch more ideas by calling the fetchNextPage function
 * @param queryVariables optional variables to send to the query, e.g. Limit, filter etc.
 * @returns {site} object containing the site details
 * @returns {isLoading} boolean indicating if the query is loading
 * @returns {isError} boolean indicating if the query has errored
 */
export function useIdeas(queryVariables?: ListIdeasQueryVariables) {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["ideas", queryVariables] as [
      string | number,
      ListIdeasQueryVariables
    ], // query key
    queryFn: async (context) => {
      const result = await listIdeasQuery(context);
      return result as { ideas: Idea[]; nextToken: string | null };
    },
    initialPageParam: undefined, // initial page param
    getNextPageParam: (lastPage: { ideas: Idea[]; nextToken: string | null }) =>
      lastPage.nextToken ?? undefined,
  });

  //flatten the pages into a single array of ideas
  const ideas = useMemo(() => {
    return data?.pages.flatMap((page) => page.ideas) ?? [];
  }, [data]);

  return {
    ideas,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
}
