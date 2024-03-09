/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const deleteIdea = /* GraphQL */ `mutation DeleteIdea(
  $input: DeleteIdeaInput!
  $condition: ModelIdeaConditionInput
) {
  deleteIdea(input: $input, condition: $condition) {
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
    votes {
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
` as GeneratedMutation<
  APITypes.DeleteIdeaMutationVariables,
  APITypes.DeleteIdeaMutation
>;
export const deleteStatus = /* GraphQL */ `mutation DeleteStatus(
  $input: DeleteStatusInput!
  $condition: ModelStatusConditionInput
) {
  deleteStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStatusMutationVariables,
  APITypes.DeleteStatusMutation
>;
export const deleteStatusTransition =
  /* GraphQL */ `mutation DeleteStatusTransition(
  $input: DeleteStatusTransitionInput!
  $condition: ModelStatusTransitionConditionInput
) {
  deleteStatusTransition(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteStatusTransitionMutationVariables,
    APITypes.DeleteStatusTransitionMutation
  >;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    ideas {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    votes {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    ideas {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    votes {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    ideas {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    votes {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createIdea = /* GraphQL */ `mutation CreateIdea(
  $input: CreateIdeaInput!
  $condition: ModelIdeaConditionInput
) {
  createIdea(input: $input, condition: $condition) {
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
    votes {
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
` as GeneratedMutation<
  APITypes.CreateIdeaMutationVariables,
  APITypes.CreateIdeaMutation
>;
export const updateIdea = /* GraphQL */ `mutation UpdateIdea(
  $input: UpdateIdeaInput!
  $condition: ModelIdeaConditionInput
) {
  updateIdea(input: $input, condition: $condition) {
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
    votes {
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
` as GeneratedMutation<
  APITypes.UpdateIdeaMutationVariables,
  APITypes.UpdateIdeaMutation
>;
export const createIdeaComment = /* GraphQL */ `mutation CreateIdeaComment(
  $input: CreateIdeaCommentInput!
  $condition: ModelIdeaCommentConditionInput
) {
  createIdeaComment(input: $input, condition: $condition) {
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
    childComments {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIdeaCommentMutationVariables,
  APITypes.CreateIdeaCommentMutation
>;
export const updateIdeaComment = /* GraphQL */ `mutation UpdateIdeaComment(
  $input: UpdateIdeaCommentInput!
  $condition: ModelIdeaCommentConditionInput
) {
  updateIdeaComment(input: $input, condition: $condition) {
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
    childComments {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIdeaCommentMutationVariables,
  APITypes.UpdateIdeaCommentMutation
>;
export const deleteIdeaComment = /* GraphQL */ `mutation DeleteIdeaComment(
  $input: DeleteIdeaCommentInput!
  $condition: ModelIdeaCommentConditionInput
) {
  deleteIdeaComment(input: $input, condition: $condition) {
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
    childComments {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIdeaCommentMutationVariables,
  APITypes.DeleteIdeaCommentMutation
>;
export const createIdeaVote = /* GraphQL */ `mutation CreateIdeaVote(
  $input: CreateIdeaVoteInput!
  $condition: ModelIdeaVoteConditionInput
) {
  createIdeaVote(input: $input, condition: $condition) {
    id
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
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIdeaVoteMutationVariables,
  APITypes.CreateIdeaVoteMutation
>;
export const updateIdeaVote = /* GraphQL */ `mutation UpdateIdeaVote(
  $input: UpdateIdeaVoteInput!
  $condition: ModelIdeaVoteConditionInput
) {
  updateIdeaVote(input: $input, condition: $condition) {
    id
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
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIdeaVoteMutationVariables,
  APITypes.UpdateIdeaVoteMutation
>;
export const deleteIdeaVote = /* GraphQL */ `mutation DeleteIdeaVote(
  $input: DeleteIdeaVoteInput!
  $condition: ModelIdeaVoteConditionInput
) {
  deleteIdeaVote(input: $input, condition: $condition) {
    id
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
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIdeaVoteMutationVariables,
  APITypes.DeleteIdeaVoteMutation
>;
export const createStatus = /* GraphQL */ `mutation CreateStatus(
  $input: CreateStatusInput!
  $condition: ModelStatusConditionInput
) {
  createStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStatusMutationVariables,
  APITypes.CreateStatusMutation
>;
export const updateStatus = /* GraphQL */ `mutation UpdateStatus(
  $input: UpdateStatusInput!
  $condition: ModelStatusConditionInput
) {
  updateStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStatusMutationVariables,
  APITypes.UpdateStatusMutation
>;
export const createStatusTransition =
  /* GraphQL */ `mutation CreateStatusTransition(
  $input: CreateStatusTransitionInput!
  $condition: ModelStatusTransitionConditionInput
) {
  createStatusTransition(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateStatusTransitionMutationVariables,
    APITypes.CreateStatusTransitionMutation
  >;
export const updateStatusTransition =
  /* GraphQL */ `mutation UpdateStatusTransition(
  $input: UpdateStatusTransitionInput!
  $condition: ModelStatusTransitionConditionInput
) {
  updateStatusTransition(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateStatusTransitionMutationVariables,
    APITypes.UpdateStatusTransitionMutation
  >;
