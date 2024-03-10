import { useQuery } from "@tanstack/react-query";
import { getIdeaQuery } from "./queries/getIdeaQuery";

export function useIdeaForEditor(id: string) {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["getIdea", id],
    queryFn: getIdeaQuery,
  });

  return {
    Ideas: data,
    isLoading,
    isFetching,
    isError,
    error,
  };
}
