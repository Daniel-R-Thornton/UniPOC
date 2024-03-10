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
    Votes( limit: 100) {
      items {
        id
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userIdeasId
 owner
    statusIdeasId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetIdeaQueryVariables, APITypes.GetIdeaQuery>;
export const getIdeaWithDepthWithoutOwner =
  /* GraphQL */ `query getIdeaWithDepthWithoutOwner($id: ID!) {
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
    Votes( limit: 100) {
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
export const listIdeasWithoutOwners =
  /* GraphQL */ `query ListIdeasWithoutOwners(
  $filter: ModelIdeaFilterInput
  $limit: Int
  $nextToken: String
) {
  listIdeas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    Votes( limit: 100) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListIdeasQueryVariables, APITypes.ListIdeasQuery>;
