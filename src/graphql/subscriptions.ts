/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateIdea = /* GraphQL */ `subscription OnCreateIdea(
  $filter: ModelSubscriptionIdeaFilterInput
  $owner: String
) {
  onCreateIdea(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIdeaSubscriptionVariables,
  APITypes.OnCreateIdeaSubscription
>;
export const onUpdateIdea = /* GraphQL */ `subscription OnUpdateIdea(
  $filter: ModelSubscriptionIdeaFilterInput
  $owner: String
) {
  onUpdateIdea(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIdeaSubscriptionVariables,
  APITypes.OnUpdateIdeaSubscription
>;
export const onDeleteIdea = /* GraphQL */ `subscription OnDeleteIdea(
  $filter: ModelSubscriptionIdeaFilterInput
  $owner: String
) {
  onDeleteIdea(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIdeaSubscriptionVariables,
  APITypes.OnDeleteIdeaSubscription
>;
export const onCreateIdeaComment =
  /* GraphQL */ `subscription OnCreateIdeaComment(
  $filter: ModelSubscriptionIdeaCommentFilterInput
  $owner: String
) {
  onCreateIdeaComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateIdeaCommentSubscriptionVariables,
    APITypes.OnCreateIdeaCommentSubscription
  >;
export const onUpdateIdeaComment =
  /* GraphQL */ `subscription OnUpdateIdeaComment(
  $filter: ModelSubscriptionIdeaCommentFilterInput
  $owner: String
) {
  onUpdateIdeaComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateIdeaCommentSubscriptionVariables,
    APITypes.OnUpdateIdeaCommentSubscription
  >;
export const onDeleteIdeaComment =
  /* GraphQL */ `subscription OnDeleteIdeaComment(
  $filter: ModelSubscriptionIdeaCommentFilterInput
  $owner: String
) {
  onDeleteIdeaComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteIdeaCommentSubscriptionVariables,
    APITypes.OnDeleteIdeaCommentSubscription
  >;
export const onCreateIdeaVote = /* GraphQL */ `subscription OnCreateIdeaVote(
  $filter: ModelSubscriptionIdeaVoteFilterInput
  $owner: String
) {
  onCreateIdeaVote(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIdeaVoteSubscriptionVariables,
  APITypes.OnCreateIdeaVoteSubscription
>;
export const onUpdateIdeaVote = /* GraphQL */ `subscription OnUpdateIdeaVote(
  $filter: ModelSubscriptionIdeaVoteFilterInput
  $owner: String
) {
  onUpdateIdeaVote(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIdeaVoteSubscriptionVariables,
  APITypes.OnUpdateIdeaVoteSubscription
>;
export const onDeleteIdeaVote = /* GraphQL */ `subscription OnDeleteIdeaVote(
  $filter: ModelSubscriptionIdeaVoteFilterInput
  $owner: String
) {
  onDeleteIdeaVote(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIdeaVoteSubscriptionVariables,
  APITypes.OnDeleteIdeaVoteSubscription
>;
export const onCreateStatus = /* GraphQL */ `subscription OnCreateStatus(
  $filter: ModelSubscriptionStatusFilterInput
  $owner: String
) {
  onCreateStatus(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStatusSubscriptionVariables,
  APITypes.OnCreateStatusSubscription
>;
export const onUpdateStatus = /* GraphQL */ `subscription OnUpdateStatus(
  $filter: ModelSubscriptionStatusFilterInput
  $owner: String
) {
  onUpdateStatus(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStatusSubscriptionVariables,
  APITypes.OnUpdateStatusSubscription
>;
export const onDeleteStatus = /* GraphQL */ `subscription OnDeleteStatus(
  $filter: ModelSubscriptionStatusFilterInput
  $owner: String
) {
  onDeleteStatus(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStatusSubscriptionVariables,
  APITypes.OnDeleteStatusSubscription
>;
export const onCreateStatusTransition =
  /* GraphQL */ `subscription OnCreateStatusTransition(
  $filter: ModelSubscriptionStatusTransitionFilterInput
  $owner: String
) {
  onCreateStatusTransition(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateStatusTransitionSubscriptionVariables,
    APITypes.OnCreateStatusTransitionSubscription
  >;
export const onUpdateStatusTransition =
  /* GraphQL */ `subscription OnUpdateStatusTransition(
  $filter: ModelSubscriptionStatusTransitionFilterInput
  $owner: String
) {
  onUpdateStatusTransition(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateStatusTransitionSubscriptionVariables,
    APITypes.OnUpdateStatusTransitionSubscription
  >;
export const onDeleteStatusTransition =
  /* GraphQL */ `subscription OnDeleteStatusTransition(
  $filter: ModelSubscriptionStatusTransitionFilterInput
  $owner: String
) {
  onDeleteStatusTransition(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteStatusTransitionSubscriptionVariables,
    APITypes.OnDeleteStatusTransitionSubscription
  >;
