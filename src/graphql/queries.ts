/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    ideas {
      nextToken
      __typename
    }
    Comments {
      nextToken
      __typename
    }
    Votes {
      nextToken
      __typename
    }
    createdAt
    avatar
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      createdAt
      avatar
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getIdea = /* GraphQL */ `query GetIdea($id: ID!) {
  getIdea(id: $id) {
    id
    name
    description
    attachments
    statusId
    Status {
      id
      name
      description
      color
      step
      owner
      createdAt
      updatedAt
      __typename
    }
    Comments {
      nextToken
      __typename
    }
    Votes {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    userIdeasId
    statusIdeasId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetIdeaQueryVariables, APITypes.GetIdeaQuery>;
export const listIdeas = /* GraphQL */ `query ListIdeas(
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
      statusId
      owner
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
export const getIdeaComment = /* GraphQL */ `query GetIdeaComment($id: ID!) {
  getIdeaComment(id: $id) {
    id
    content
    parentCommentId
    ideaId
    userId
    Idea {
      id
      name
      description
      attachments
      statusId
      owner
      createdAt
      updatedAt
      userIdeasId
      statusIdeasId
      __typename
    }
    User {
      id
      username
      email
      createdAt
      avatar
      owner
      updatedAt
      __typename
    }
    ParentComment {
      id
      content
      parentCommentId
      ideaId
      userId
      owner
      createdAt
      updatedAt
      __typename
    }
    ChildComments {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIdeaCommentQueryVariables,
  APITypes.GetIdeaCommentQuery
>;
export const listIdeaComments = /* GraphQL */ `query ListIdeaComments(
  $filter: ModelIdeaCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listIdeaComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      parentCommentId
      ideaId
      userId
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIdeaCommentsQueryVariables,
  APITypes.ListIdeaCommentsQuery
>;
export const ideaCommentsByIdeaId = /* GraphQL */ `query IdeaCommentsByIdeaId(
  $ideaId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIdeaCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  ideaCommentsByIdeaId(
    ideaId: $ideaId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      parentCommentId
      ideaId
      userId
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IdeaCommentsByIdeaIdQueryVariables,
  APITypes.IdeaCommentsByIdeaIdQuery
>;
export const ideaCommentsByUserId = /* GraphQL */ `query IdeaCommentsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIdeaCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  ideaCommentsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      parentCommentId
      ideaId
      userId
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IdeaCommentsByUserIdQueryVariables,
  APITypes.IdeaCommentsByUserIdQuery
>;
export const getIdeaVote = /* GraphQL */ `query GetIdeaVote($id: ID!) {
  getIdeaVote(id: $id) {
    id
    ideaId
    userId
    value
    Idea {
      id
      name
      description
      attachments
      statusId
      owner
      createdAt
      updatedAt
      userIdeasId
      statusIdeasId
      __typename
    }
    User {
      id
      username
      email
      createdAt
      avatar
      owner
      updatedAt
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIdeaVoteQueryVariables,
  APITypes.GetIdeaVoteQuery
>;
export const listIdeaVotes = /* GraphQL */ `query ListIdeaVotes(
  $filter: ModelIdeaVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listIdeaVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ideaId
      userId
      value
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIdeaVotesQueryVariables,
  APITypes.ListIdeaVotesQuery
>;
export const ideaVotesByIdeaId = /* GraphQL */ `query IdeaVotesByIdeaId(
  $ideaId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIdeaVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  ideaVotesByIdeaId(
    ideaId: $ideaId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      ideaId
      userId
      value
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IdeaVotesByIdeaIdQueryVariables,
  APITypes.IdeaVotesByIdeaIdQuery
>;
export const ideaVotesByUserId = /* GraphQL */ `query IdeaVotesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIdeaVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  ideaVotesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      ideaId
      userId
      value
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IdeaVotesByUserIdQueryVariables,
  APITypes.IdeaVotesByUserIdQuery
>;
export const getStatus = /* GraphQL */ `query GetStatus($id: ID!) {
  getStatus(id: $id) {
    id
    name
    description
    color
    ideas {
      nextToken
      __typename
    }
    nextSteps {
      nextToken
      __typename
    }
    previousSteps {
      nextToken
      __typename
    }
    step
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStatusQueryVariables, APITypes.GetStatusQuery>;
export const listStatuses = /* GraphQL */ `query ListStatuses(
  $filter: ModelStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      color
      step
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStatusesQueryVariables,
  APITypes.ListStatusesQuery
>;
export const getStatusTransition =
  /* GraphQL */ `query GetStatusTransition($id: ID!) {
  getStatusTransition(id: $id) {
    id
    fromStatusId
    toStatusId
    fromStatus {
      id
      name
      description
      color
      step
      owner
      createdAt
      updatedAt
      __typename
    }
    toStatus {
      id
      name
      description
      color
      step
      owner
      createdAt
      updatedAt
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetStatusTransitionQueryVariables,
    APITypes.GetStatusTransitionQuery
  >;
export const listStatusTransitions = /* GraphQL */ `query ListStatusTransitions(
  $filter: ModelStatusTransitionFilterInput
  $limit: Int
  $nextToken: String
) {
  listStatusTransitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fromStatusId
      toStatusId
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStatusTransitionsQueryVariables,
  APITypes.ListStatusTransitionsQuery
>;
export const statusTransitionsByFromStatusIdAndToStatusId =
  /* GraphQL */ `query StatusTransitionsByFromStatusIdAndToStatusId(
  $fromStatusId: ID!
  $toStatusId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStatusTransitionFilterInput
  $limit: Int
  $nextToken: String
) {
  statusTransitionsByFromStatusIdAndToStatusId(
    fromStatusId: $fromStatusId
    toStatusId: $toStatusId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fromStatusId
      toStatusId
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.StatusTransitionsByFromStatusIdAndToStatusIdQueryVariables,
    APITypes.StatusTransitionsByFromStatusIdAndToStatusIdQuery
  >;
export const statusTransitionsByToStatusIdAndFromStatusId =
  /* GraphQL */ `query StatusTransitionsByToStatusIdAndFromStatusId(
  $toStatusId: ID!
  $fromStatusId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStatusTransitionFilterInput
  $limit: Int
  $nextToken: String
) {
  statusTransitionsByToStatusIdAndFromStatusId(
    toStatusId: $toStatusId
    fromStatusId: $fromStatusId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fromStatusId
      toStatusId
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.StatusTransitionsByToStatusIdAndFromStatusIdQueryVariables,
    APITypes.StatusTransitionsByToStatusIdAndFromStatusIdQuery
  >;
