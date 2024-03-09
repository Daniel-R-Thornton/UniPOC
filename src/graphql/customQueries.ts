import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getIdeaWithDepth =
  /* GraphQL */ `query GetIdeaWithDepth($id: ID!) {
  getIdea(id: $id) {
    id
    name
    description
    attachments
    Comments(limit: 100) {
      items {
        id   
      }
      nextToken
      __typename
    }
    votes( limit: 100) {
      items {
        id
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userIdeasId
    statusIdeasId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetIdeaQueryVariables, APITypes.GetIdeaQuery>;
