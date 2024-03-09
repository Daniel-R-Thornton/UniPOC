/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser =
  /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateUserSubscriptionVariables,
    APITypes.OnCreateUserSubscription
  >;
export const onUpdateUser =
  /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateUserSubscriptionVariables,
    APITypes.OnUpdateUserSubscription
  >;
export const onDeleteUser =
  /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteUserSubscriptionVariables,
    APITypes.OnDeleteUserSubscription
  >;
export const onCreateIdea =
  /* GraphQL */ `subscription OnCreateIdea($filter: ModelSubscriptionIdeaFilterInput) {
  onCreateIdea(filter: $filter) {
    id
    name
    description
    attachments
    comments {
      nextToken
      __typename
    }
    votes {
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
` as GeneratedSubscription<
    APITypes.OnCreateIdeaSubscriptionVariables,
    APITypes.OnCreateIdeaSubscription
  >;
export const onUpdateIdea =
  /* GraphQL */ `subscription OnUpdateIdea($filter: ModelSubscriptionIdeaFilterInput) {
  onUpdateIdea(filter: $filter) {
    id
    name
    description
    attachments
    comments {
      nextToken
      __typename
    }
    votes {
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
` as GeneratedSubscription<
    APITypes.OnUpdateIdeaSubscriptionVariables,
    APITypes.OnUpdateIdeaSubscription
  >;
export const onDeleteIdea =
  /* GraphQL */ `subscription OnDeleteIdea($filter: ModelSubscriptionIdeaFilterInput) {
  onDeleteIdea(filter: $filter) {
    id
    name
    description
    attachments
    comments {
      nextToken
      __typename
    }
    votes {
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
` as GeneratedSubscription<
    APITypes.OnDeleteIdeaSubscriptionVariables,
    APITypes.OnDeleteIdeaSubscription
  >;
export const onCreateIdeaComment =
  /* GraphQL */ `subscription OnCreateIdeaComment(
  $filter: ModelSubscriptionIdeaCommentFilterInput
) {
  onCreateIdeaComment(filter: $filter) {
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
      createdAt
      updatedAt
      userIdeasId
      statusIdeasId
      __typename
    }
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
) {
  onUpdateIdeaComment(filter: $filter) {
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
      createdAt
      updatedAt
      userIdeasId
      statusIdeasId
      __typename
    }
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
) {
  onDeleteIdeaComment(filter: $filter) {
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
      createdAt
      updatedAt
      userIdeasId
      statusIdeasId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteIdeaCommentSubscriptionVariables,
    APITypes.OnDeleteIdeaCommentSubscription
  >;
export const onCreateIdeaVote =
  /* GraphQL */ `subscription OnCreateIdeaVote($filter: ModelSubscriptionIdeaVoteFilterInput) {
  onCreateIdeaVote(filter: $filter) {
    id
    ideaId
    userId
    Idea {
      id
      name
      description
      attachments
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
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateIdeaVoteSubscriptionVariables,
    APITypes.OnCreateIdeaVoteSubscription
  >;
export const onUpdateIdeaVote =
  /* GraphQL */ `subscription OnUpdateIdeaVote($filter: ModelSubscriptionIdeaVoteFilterInput) {
  onUpdateIdeaVote(filter: $filter) {
    id
    ideaId
    userId
    Idea {
      id
      name
      description
      attachments
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
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateIdeaVoteSubscriptionVariables,
    APITypes.OnUpdateIdeaVoteSubscription
  >;
export const onDeleteIdeaVote =
  /* GraphQL */ `subscription OnDeleteIdeaVote($filter: ModelSubscriptionIdeaVoteFilterInput) {
  onDeleteIdeaVote(filter: $filter) {
    id
    ideaId
    userId
    Idea {
      id
      name
      description
      attachments
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
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteIdeaVoteSubscriptionVariables,
    APITypes.OnDeleteIdeaVoteSubscription
  >;
export const onCreateStatus =
  /* GraphQL */ `subscription OnCreateStatus($filter: ModelSubscriptionStatusFilterInput) {
  onCreateStatus(filter: $filter) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateStatusSubscriptionVariables,
    APITypes.OnCreateStatusSubscription
  >;
export const onUpdateStatus =
  /* GraphQL */ `subscription OnUpdateStatus($filter: ModelSubscriptionStatusFilterInput) {
  onUpdateStatus(filter: $filter) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateStatusSubscriptionVariables,
    APITypes.OnUpdateStatusSubscription
  >;
export const onDeleteStatus =
  /* GraphQL */ `subscription OnDeleteStatus($filter: ModelSubscriptionStatusFilterInput) {
  onDeleteStatus(filter: $filter) {
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
) {
  onCreateStatusTransition(filter: $filter) {
    id
    fromStatusId
    toStatusId
    fromStatus {
      id
      name
      description
      color
      step
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
      createdAt
      updatedAt
      __typename
    }
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
) {
  onUpdateStatusTransition(filter: $filter) {
    id
    fromStatusId
    toStatusId
    fromStatus {
      id
      name
      description
      color
      step
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
      createdAt
      updatedAt
      __typename
    }
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
) {
  onDeleteStatusTransition(filter: $filter) {
    id
    fromStatusId
    toStatusId
    fromStatus {
      id
      name
      description
      color
      step
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteStatusTransitionSubscriptionVariables,
    APITypes.OnDeleteStatusTransitionSubscription
  >;
