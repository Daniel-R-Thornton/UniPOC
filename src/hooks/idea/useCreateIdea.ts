import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Idea, CreateIdeaInput, ModelIdeaConditionInput } from "src/API";
import { createIdeaMutation } from "./mutations/createIdeaMutation";

/**
 * A hook to create ideas
 * @param onSuccessCallback an optional callback function to run after the idea is successfully created
 * @returns a mutation object that can be used to create ideas
 */
export function useCreateIdea(onSuccessCallback?: (idea: Idea) => void) {
  const queryClient = useQueryClient();
  const createIdea = useMutation({
    mutationFn: ({
      input,
      condition,
    }: {
      /**
       * The input to create the idea
       * The tenantId will be added automatically so is not required
       */
      input: CreateIdeaInput;
      condition?: ModelIdeaConditionInput;
    }) =>
      createIdeaMutation({
        input: input,
        condition,
      }),
    onError: (error) => {
      error instanceof Error && console.log("error creating idea", error);
    },
    onSuccess: async (data) => {
      //create the attributes if a schema is provided
      onSuccessCallback && onSuccessCallback(data);
    },
    onSettled: () => {
      //refetch the idea query after error or success to create the cache
      queryClient.resetQueries({ queryKey: ["ideas"] });
    },
  });
  return createIdea;
}
