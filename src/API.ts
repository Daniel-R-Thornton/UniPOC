/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  createdAt?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  ideas?: ModelIdeaConnection | null,
  comments?: ModelIdeaCommentConnection | null,
  votes?: ModelIdeaVoteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelIdeaConnection = {
  __typename: "ModelIdeaConnection",
  items:  Array<Idea | null >,
  nextToken?: string | null,
};

export type Idea = {
  __typename: "Idea",
  id: string,
  name: string,
  description: string,
  attachments?: Array< string | null > | null,
  comments?: ModelIdeaCommentConnection | null,
  votes?: ModelIdeaVoteConnection | null,
  createdAt: string,
  updatedAt: string,
  userIdeasId?: string | null,
  statusIdeasId?: string | null,
};

export type ModelIdeaCommentConnection = {
  __typename: "ModelIdeaCommentConnection",
  items:  Array<IdeaComment | null >,
  nextToken?: string | null,
};

export type IdeaComment = {
  __typename: "IdeaComment",
  id: string,
  content: string,
  parentCommentId?: string | null,
  ideaId: string,
  userId: string,
  Idea?: Idea | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelIdeaVoteConnection = {
  __typename: "ModelIdeaVoteConnection",
  items:  Array<IdeaVote | null >,
  nextToken?: string | null,
};

export type IdeaVote = {
  __typename: "IdeaVote",
  id: string,
  ideaId: string,
  userId: string,
  Idea?: Idea | null,
  User?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  createdAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateIdeaInput = {
  id?: string | null,
  name: string,
  description: string,
  attachments?: Array< string | null > | null,
  userIdeasId?: string | null,
  statusIdeasId?: string | null,
};

export type ModelIdeaConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attachments?: ModelStringInput | null,
  and?: Array< ModelIdeaConditionInput | null > | null,
  or?: Array< ModelIdeaConditionInput | null > | null,
  not?: ModelIdeaConditionInput | null,
  userIdeasId?: ModelIDInput | null,
  statusIdeasId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateIdeaInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  attachments?: Array< string | null > | null,
  userIdeasId?: string | null,
  statusIdeasId?: string | null,
};

export type DeleteIdeaInput = {
  id: string,
};

export type CreateIdeaCommentInput = {
  id?: string | null,
  content: string,
  parentCommentId?: string | null,
  ideaId: string,
  userId: string,
};

export type ModelIdeaCommentConditionInput = {
  content?: ModelStringInput | null,
  parentCommentId?: ModelIDInput | null,
  ideaId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelIdeaCommentConditionInput | null > | null,
  or?: Array< ModelIdeaCommentConditionInput | null > | null,
  not?: ModelIdeaCommentConditionInput | null,
};

export type UpdateIdeaCommentInput = {
  id: string,
  content?: string | null,
  parentCommentId?: string | null,
  ideaId?: string | null,
  userId?: string | null,
};

export type DeleteIdeaCommentInput = {
  id: string,
};

export type CreateIdeaVoteInput = {
  id?: string | null,
  ideaId: string,
  userId: string,
};

export type ModelIdeaVoteConditionInput = {
  ideaId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelIdeaVoteConditionInput | null > | null,
  or?: Array< ModelIdeaVoteConditionInput | null > | null,
  not?: ModelIdeaVoteConditionInput | null,
};

export type UpdateIdeaVoteInput = {
  id: string,
  ideaId?: string | null,
  userId?: string | null,
};

export type DeleteIdeaVoteInput = {
  id: string,
};

export type CreateStatusInput = {
  id?: string | null,
  name: string,
  description: string,
  color: string,
  step: number,
};

export type ModelStatusConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
  step?: ModelIntInput | null,
  and?: Array< ModelStatusConditionInput | null > | null,
  or?: Array< ModelStatusConditionInput | null > | null,
  not?: ModelStatusConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type status = {
  __typename: "status",
  id: string,
  name: string,
  description: string,
  color: string,
  ideas?: ModelIdeaConnection | null,
  nextSteps?: ModelstatusTransitionConnection | null,
  previousSteps?: ModelstatusTransitionConnection | null,
  step: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelstatusTransitionConnection = {
  __typename: "ModelstatusTransitionConnection",
  items:  Array<statusTransition | null >,
  nextToken?: string | null,
};

export type statusTransition = {
  __typename: "statusTransition",
  id: string,
  fromStatusId: string,
  toStatusId: string,
  fromStatus?: status | null,
  toStatus?: status | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStatusInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  color?: string | null,
  step?: number | null,
};

export type DeleteStatusInput = {
  id: string,
};

export type CreateStatusTransitionInput = {
  id?: string | null,
  fromStatusId: string,
  toStatusId: string,
};

export type ModelStatusTransitionConditionInput = {
  fromStatusId?: ModelIDInput | null,
  toStatusId?: ModelIDInput | null,
  and?: Array< ModelStatusTransitionConditionInput | null > | null,
  or?: Array< ModelStatusTransitionConditionInput | null > | null,
  not?: ModelStatusTransitionConditionInput | null,
};

export type UpdateStatusTransitionInput = {
  id: string,
  fromStatusId?: string | null,
  toStatusId?: string | null,
};

export type DeleteStatusTransitionInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelIdeaFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attachments?: ModelStringInput | null,
  and?: Array< ModelIdeaFilterInput | null > | null,
  or?: Array< ModelIdeaFilterInput | null > | null,
  not?: ModelIdeaFilterInput | null,
  userIdeasId?: ModelIDInput | null,
  statusIdeasId?: ModelIDInput | null,
};

export type ModelIdeaCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  parentCommentId?: ModelIDInput | null,
  ideaId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelIdeaCommentFilterInput | null > | null,
  or?: Array< ModelIdeaCommentFilterInput | null > | null,
  not?: ModelIdeaCommentFilterInput | null,
};

export type ModelIdeaVoteFilterInput = {
  id?: ModelIDInput | null,
  ideaId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelIdeaVoteFilterInput | null > | null,
  or?: Array< ModelIdeaVoteFilterInput | null > | null,
  not?: ModelIdeaVoteFilterInput | null,
};

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
  step?: ModelIntInput | null,
  and?: Array< ModelStatusFilterInput | null > | null,
  or?: Array< ModelStatusFilterInput | null > | null,
  not?: ModelStatusFilterInput | null,
};

export type ModelStatusConnection = {
  __typename: "ModelStatusConnection",
  items:  Array<status | null >,
  nextToken?: string | null,
};

export type ModelStatusTransitionFilterInput = {
  id?: ModelIDInput | null,
  fromStatusId?: ModelIDInput | null,
  toStatusId?: ModelIDInput | null,
  and?: Array< ModelStatusTransitionFilterInput | null > | null,
  or?: Array< ModelStatusTransitionFilterInput | null > | null,
  not?: ModelStatusTransitionFilterInput | null,
};

export type ModelStatusTransitionConnection = {
  __typename: "ModelStatusTransitionConnection",
  items:  Array<statusTransition | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelstatusTransitionFilterInput = {
  id?: ModelIDInput | null,
  fromStatusId?: ModelIDInput | null,
  toStatusId?: ModelIDInput | null,
  and?: Array< ModelstatusTransitionFilterInput | null > | null,
  or?: Array< ModelstatusTransitionFilterInput | null > | null,
  not?: ModelstatusTransitionFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIdeaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  attachments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIdeaFilterInput | null > | null,
  or?: Array< ModelSubscriptionIdeaFilterInput | null > | null,
};

export type ModelSubscriptionIdeaCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  parentCommentId?: ModelSubscriptionIDInput | null,
  ideaId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionIdeaCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionIdeaCommentFilterInput | null > | null,
};

export type ModelSubscriptionIdeaVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  ideaId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionIdeaVoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionIdeaVoteFilterInput | null > | null,
};

export type ModelSubscriptionStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  step?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionStatusFilterInput | null > | null,
  or?: Array< ModelSubscriptionStatusFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStatusTransitionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fromStatusId?: ModelSubscriptionIDInput | null,
  toStatusId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStatusTransitionFilterInput | null > | null,
  or?: Array< ModelSubscriptionStatusTransitionFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIdeaMutationVariables = {
  input: CreateIdeaInput,
  condition?: ModelIdeaConditionInput | null,
};

export type CreateIdeaMutation = {
  createIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type UpdateIdeaMutationVariables = {
  input: UpdateIdeaInput,
  condition?: ModelIdeaConditionInput | null,
};

export type UpdateIdeaMutation = {
  updateIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type DeleteIdeaMutationVariables = {
  input: DeleteIdeaInput,
  condition?: ModelIdeaConditionInput | null,
};

export type DeleteIdeaMutation = {
  deleteIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type CreateIdeaCommentMutationVariables = {
  input: CreateIdeaCommentInput,
  condition?: ModelIdeaCommentConditionInput | null,
};

export type CreateIdeaCommentMutation = {
  createIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIdeaCommentMutationVariables = {
  input: UpdateIdeaCommentInput,
  condition?: ModelIdeaCommentConditionInput | null,
};

export type UpdateIdeaCommentMutation = {
  updateIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIdeaCommentMutationVariables = {
  input: DeleteIdeaCommentInput,
  condition?: ModelIdeaCommentConditionInput | null,
};

export type DeleteIdeaCommentMutation = {
  deleteIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIdeaVoteMutationVariables = {
  input: CreateIdeaVoteInput,
  condition?: ModelIdeaVoteConditionInput | null,
};

export type CreateIdeaVoteMutation = {
  createIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIdeaVoteMutationVariables = {
  input: UpdateIdeaVoteInput,
  condition?: ModelIdeaVoteConditionInput | null,
};

export type UpdateIdeaVoteMutation = {
  updateIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIdeaVoteMutationVariables = {
  input: DeleteIdeaVoteInput,
  condition?: ModelIdeaVoteConditionInput | null,
};

export type DeleteIdeaVoteMutation = {
  deleteIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStatusMutationVariables = {
  input: CreateStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type CreateStatusMutation = {
  createStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStatusMutationVariables = {
  input: UpdateStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type UpdateStatusMutation = {
  updateStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStatusMutationVariables = {
  input: DeleteStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type DeleteStatusMutation = {
  deleteStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStatusTransitionMutationVariables = {
  input: CreateStatusTransitionInput,
  condition?: ModelStatusTransitionConditionInput | null,
};

export type CreateStatusTransitionMutation = {
  createStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStatusTransitionMutationVariables = {
  input: UpdateStatusTransitionInput,
  condition?: ModelStatusTransitionConditionInput | null,
};

export type UpdateStatusTransitionMutation = {
  updateStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStatusTransitionMutationVariables = {
  input: DeleteStatusTransitionInput,
  condition?: ModelStatusTransitionConditionInput | null,
};

export type DeleteStatusTransitionMutation = {
  deleteStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIdeaQueryVariables = {
  id: string,
};

export type GetIdeaQuery = {
  getIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type ListIdeasQueryVariables = {
  filter?: ModelIdeaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeasQuery = {
  listIdeas?:  {
    __typename: "ModelIdeaConnection",
    items:  Array< {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIdeaCommentQueryVariables = {
  id: string,
};

export type GetIdeaCommentQuery = {
  getIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIdeaCommentsQueryVariables = {
  filter?: ModelIdeaCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeaCommentsQuery = {
  listIdeaComments?:  {
    __typename: "ModelIdeaCommentConnection",
    items:  Array< {
      __typename: "IdeaComment",
      id: string,
      content: string,
      parentCommentId?: string | null,
      ideaId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIdeaVoteQueryVariables = {
  id: string,
};

export type GetIdeaVoteQuery = {
  getIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIdeaVotesQueryVariables = {
  filter?: ModelIdeaVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeaVotesQuery = {
  listIdeaVotes?:  {
    __typename: "ModelIdeaVoteConnection",
    items:  Array< {
      __typename: "IdeaVote",
      id: string,
      ideaId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStatusQueryVariables = {
  id: string,
};

export type GetStatusQuery = {
  getStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatusesQueryVariables = {
  filter?: ModelStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatusesQuery = {
  listStatuses?:  {
    __typename: "ModelStatusConnection",
    items:  Array< {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStatusTransitionQueryVariables = {
  id: string,
};

export type GetStatusTransitionQuery = {
  getStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatusTransitionsQueryVariables = {
  filter?: ModelStatusTransitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatusTransitionsQuery = {
  listStatusTransitions?:  {
    __typename: "ModelStatusTransitionConnection",
    items:  Array< {
      __typename: "statusTransition",
      id: string,
      fromStatusId: string,
      toStatusId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IdeaCommentsByIdeaIdQueryVariables = {
  ideaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIdeaCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IdeaCommentsByIdeaIdQuery = {
  ideaCommentsByIdeaId?:  {
    __typename: "ModelIdeaCommentConnection",
    items:  Array< {
      __typename: "IdeaComment",
      id: string,
      content: string,
      parentCommentId?: string | null,
      ideaId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IdeaCommentsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIdeaCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IdeaCommentsByUserIdQuery = {
  ideaCommentsByUserId?:  {
    __typename: "ModelIdeaCommentConnection",
    items:  Array< {
      __typename: "IdeaComment",
      id: string,
      content: string,
      parentCommentId?: string | null,
      ideaId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IdeaVotesByIdeaIdQueryVariables = {
  ideaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIdeaVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IdeaVotesByIdeaIdQuery = {
  ideaVotesByIdeaId?:  {
    __typename: "ModelIdeaVoteConnection",
    items:  Array< {
      __typename: "IdeaVote",
      id: string,
      ideaId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IdeaVotesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIdeaVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IdeaVotesByUserIdQuery = {
  ideaVotesByUserId?:  {
    __typename: "ModelIdeaVoteConnection",
    items:  Array< {
      __typename: "IdeaVote",
      id: string,
      ideaId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StatusTransitionsByFromStatusIdAndToStatusIdQueryVariables = {
  fromStatusId: string,
  toStatusId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelstatusTransitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StatusTransitionsByFromStatusIdAndToStatusIdQuery = {
  statusTransitionsByFromStatusIdAndToStatusId?:  {
    __typename: "ModelstatusTransitionConnection",
    items:  Array< {
      __typename: "statusTransition",
      id: string,
      fromStatusId: string,
      toStatusId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StatusTransitionsByToStatusIdAndFromStatusIdQueryVariables = {
  toStatusId: string,
  fromStatusId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelstatusTransitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StatusTransitionsByToStatusIdAndFromStatusIdQuery = {
  statusTransitionsByToStatusIdAndFromStatusId?:  {
    __typename: "ModelstatusTransitionConnection",
    items:  Array< {
      __typename: "statusTransition",
      id: string,
      fromStatusId: string,
      toStatusId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIdeaSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaFilterInput | null,
};

export type OnCreateIdeaSubscription = {
  onCreateIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type OnUpdateIdeaSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaFilterInput | null,
};

export type OnUpdateIdeaSubscription = {
  onUpdateIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type OnDeleteIdeaSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaFilterInput | null,
};

export type OnDeleteIdeaSubscription = {
  onDeleteIdea?:  {
    __typename: "Idea",
    id: string,
    name: string,
    description: string,
    attachments?: Array< string | null > | null,
    comments?:  {
      __typename: "ModelIdeaCommentConnection",
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelIdeaVoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userIdeasId?: string | null,
    statusIdeasId?: string | null,
  } | null,
};

export type OnCreateIdeaCommentSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaCommentFilterInput | null,
};

export type OnCreateIdeaCommentSubscription = {
  onCreateIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIdeaCommentSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaCommentFilterInput | null,
};

export type OnUpdateIdeaCommentSubscription = {
  onUpdateIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIdeaCommentSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaCommentFilterInput | null,
};

export type OnDeleteIdeaCommentSubscription = {
  onDeleteIdeaComment?:  {
    __typename: "IdeaComment",
    id: string,
    content: string,
    parentCommentId?: string | null,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIdeaVoteSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaVoteFilterInput | null,
};

export type OnCreateIdeaVoteSubscription = {
  onCreateIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIdeaVoteSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaVoteFilterInput | null,
};

export type OnUpdateIdeaVoteSubscription = {
  onUpdateIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIdeaVoteSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaVoteFilterInput | null,
};

export type OnDeleteIdeaVoteSubscription = {
  onDeleteIdeaVote?:  {
    __typename: "IdeaVote",
    id: string,
    ideaId: string,
    userId: string,
    Idea?:  {
      __typename: "Idea",
      id: string,
      name: string,
      description: string,
      attachments?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userIdeasId?: string | null,
      statusIdeasId?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null,
};

export type OnCreateStatusSubscription = {
  onCreateStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null,
};

export type OnUpdateStatusSubscription = {
  onUpdateStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null,
};

export type OnDeleteStatusSubscription = {
  onDeleteStatus?:  {
    __typename: "status",
    id: string,
    name: string,
    description: string,
    color: string,
    ideas?:  {
      __typename: "ModelIdeaConnection",
      nextToken?: string | null,
    } | null,
    nextSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    previousSteps?:  {
      __typename: "ModelstatusTransitionConnection",
      nextToken?: string | null,
    } | null,
    step: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStatusTransitionSubscriptionVariables = {
  filter?: ModelSubscriptionStatusTransitionFilterInput | null,
};

export type OnCreateStatusTransitionSubscription = {
  onCreateStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStatusTransitionSubscriptionVariables = {
  filter?: ModelSubscriptionStatusTransitionFilterInput | null,
};

export type OnUpdateStatusTransitionSubscription = {
  onUpdateStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStatusTransitionSubscriptionVariables = {
  filter?: ModelSubscriptionStatusTransitionFilterInput | null,
};

export type OnDeleteStatusTransitionSubscription = {
  onDeleteStatusTransition?:  {
    __typename: "statusTransition",
    id: string,
    fromStatusId: string,
    toStatusId: string,
    fromStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    toStatus?:  {
      __typename: "status",
      id: string,
      name: string,
      description: string,
      color: string,
      step: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
