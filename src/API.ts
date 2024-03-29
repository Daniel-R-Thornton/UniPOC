/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Idea = {
  __typename: "Idea";
  id: string;
  name: string;
  description: string;
  attachments?: Array<string | null> | null;
  statusId?: string | null;
  Status?: Status | null;
  Comments?: ModelIdeaCommentConnection | null;
  votes?: ModelIdeaVoteConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  userIdeasId?: string | null;
  statusIdeasId?: string | null;
};

export type Status = {
  __typename: "Status";
  id: string;
  name: string;
  description: string;
  color: string;
  ideas?: ModelIdeaConnection | null;
  nextSteps?: ModelStatusTransitionConnection | null;
  previousSteps?: ModelStatusTransitionConnection | null;
  step: number;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelIdeaConnection = {
  __typename: "ModelIdeaConnection";
  items: Array<Idea | null>;
  nextToken?: string | null;
};

export type ModelStatusTransitionConnection = {
  __typename: "ModelStatusTransitionConnection";
  items: Array<StatusTransition | null>;
  nextToken?: string | null;
};

export type StatusTransition = {
  __typename: "StatusTransition";
  id: string;
  fromStatusId: string;
  toStatusId: string;
  fromStatus?: Status | null;
  toStatus?: Status | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelIdeaCommentConnection = {
  __typename: "ModelIdeaCommentConnection";
  items: Array<IdeaComment | null>;
  nextToken?: string | null;
};

export type IdeaComment = {
  __typename: "IdeaComment";
  id: string;
  content: string;
  parentCommentId?: string | null;
  ideaId: string;
  userId: string;
  Idea?: Idea | null;
  User?: User | null;
  ParentComment?: IdeaComment | null;
  childComments?: ModelIdeaCommentConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  __typename: "User";
  id: string;
  username: string;
  email?: string | null;
  ideas?: ModelIdeaConnection | null;
  Comments?: ModelIdeaCommentConnection | null;
  votes?: ModelIdeaVoteConnection | null;
  createdAt: string;
  avatar?: string | null;
  owner?: string | null;
  updatedAt: string;
};

export type ModelIdeaVoteConnection = {
  __typename: "ModelIdeaVoteConnection";
  items: Array<IdeaVote | null>;
  nextToken?: string | null;
};

export type IdeaVote = {
  __typename: "IdeaVote";
  id: string;
  ideaId: string;
  userId: string;
  Idea?: Idea | null;
  User?: User | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStatusInput = {
  id: string;
};

export type ModelStatusConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  color?: ModelStringInput | null;
  step?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelStatusConditionInput | null> | null;
  or?: Array<ModelStatusConditionInput | null> | null;
  not?: ModelStatusConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type DeleteStatusTransitionInput = {
  id: string;
};

export type ModelStatusTransitionConditionInput = {
  fromStatusId?: ModelIDInput | null;
  toStatusId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelStatusTransitionConditionInput | null> | null;
  or?: Array<ModelStatusTransitionConditionInput | null> | null;
  not?: ModelStatusTransitionConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateUserInput = {
  id?: string | null;
  username: string;
  email?: string | null;
  createdAt?: string | null;
  avatar?: string | null;
  owner?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  email?: string | null;
  createdAt?: string | null;
  avatar?: string | null;
  owner?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateIdeaInput = {
  id?: string | null;
  name: string;
  description: string;
  attachments?: Array<string | null> | null;
  statusId?: string | null;
  owner?: string | null;
  userIdeasId?: string | null;
  statusIdeasId?: string | null;
};

export type ModelIdeaConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  attachments?: ModelStringInput | null;
  statusId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelIdeaConditionInput | null> | null;
  or?: Array<ModelIdeaConditionInput | null> | null;
  not?: ModelIdeaConditionInput | null;
  userIdeasId?: ModelIDInput | null;
  statusIdeasId?: ModelIDInput | null;
};

export type UpdateIdeaInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  attachments?: Array<string | null> | null;
  statusId?: string | null;
  owner?: string | null;
  userIdeasId?: string | null;
  statusIdeasId?: string | null;
};

export type DeleteIdeaInput = {
  id: string;
};

export type CreateIdeaCommentInput = {
  id?: string | null;
  content: string;
  parentCommentId?: string | null;
  ideaId: string;
  userId: string;
  owner?: string | null;
};

export type ModelIdeaCommentConditionInput = {
  content?: ModelStringInput | null;
  parentCommentId?: ModelIDInput | null;
  ideaId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelIdeaCommentConditionInput | null> | null;
  or?: Array<ModelIdeaCommentConditionInput | null> | null;
  not?: ModelIdeaCommentConditionInput | null;
};

export type UpdateIdeaCommentInput = {
  id: string;
  content?: string | null;
  parentCommentId?: string | null;
  ideaId?: string | null;
  userId?: string | null;
  owner?: string | null;
};

export type DeleteIdeaCommentInput = {
  id: string;
};

export type CreateIdeaVoteInput = {
  id?: string | null;
  ideaId: string;
  userId: string;
  owner?: string | null;
};

export type ModelIdeaVoteConditionInput = {
  ideaId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelIdeaVoteConditionInput | null> | null;
  or?: Array<ModelIdeaVoteConditionInput | null> | null;
  not?: ModelIdeaVoteConditionInput | null;
};

export type UpdateIdeaVoteInput = {
  id: string;
  ideaId?: string | null;
  userId?: string | null;
  owner?: string | null;
};

export type DeleteIdeaVoteInput = {
  id: string;
};

export type CreateStatusInput = {
  id?: string | null;
  name: string;
  description: string;
  color: string;
  step: number;
  owner?: string | null;
};

export type UpdateStatusInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  color?: string | null;
  step?: number | null;
  owner?: string | null;
};

export type CreateStatusTransitionInput = {
  id?: string | null;
  fromStatusId: string;
  toStatusId: string;
  owner?: string | null;
};

export type UpdateStatusTransitionInput = {
  id: string;
  fromStatusId?: string | null;
  toStatusId?: string | null;
  owner?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelIdeaFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  attachments?: ModelStringInput | null;
  statusId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelIdeaFilterInput | null> | null;
  or?: Array<ModelIdeaFilterInput | null> | null;
  not?: ModelIdeaFilterInput | null;
  userIdeasId?: ModelIDInput | null;
  statusIdeasId?: ModelIDInput | null;
};

export type ModelIdeaCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  parentCommentId?: ModelIDInput | null;
  ideaId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelIdeaCommentFilterInput | null> | null;
  or?: Array<ModelIdeaCommentFilterInput | null> | null;
  not?: ModelIdeaCommentFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelIdeaVoteFilterInput = {
  id?: ModelIDInput | null;
  ideaId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelIdeaVoteFilterInput | null> | null;
  or?: Array<ModelIdeaVoteFilterInput | null> | null;
  not?: ModelIdeaVoteFilterInput | null;
};

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  color?: ModelStringInput | null;
  step?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelStatusFilterInput | null> | null;
  or?: Array<ModelStatusFilterInput | null> | null;
  not?: ModelStatusFilterInput | null;
};

export type ModelStatusConnection = {
  __typename: "ModelStatusConnection";
  items: Array<Status | null>;
  nextToken?: string | null;
};

export type ModelStatusTransitionFilterInput = {
  id?: ModelIDInput | null;
  fromStatusId?: ModelIDInput | null;
  toStatusId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelStatusTransitionFilterInput | null> | null;
  or?: Array<ModelStatusTransitionFilterInput | null> | null;
  not?: ModelStatusTransitionFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  username?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  avatar?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIdeaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  attachments?: ModelSubscriptionStringInput | null;
  statusId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionIdeaFilterInput | null> | null;
  or?: Array<ModelSubscriptionIdeaFilterInput | null> | null;
};

export type ModelSubscriptionIdeaCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  content?: ModelSubscriptionStringInput | null;
  parentCommentId?: ModelSubscriptionIDInput | null;
  ideaId?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionIdeaCommentFilterInput | null> | null;
  or?: Array<ModelSubscriptionIdeaCommentFilterInput | null> | null;
};

export type ModelSubscriptionIdeaVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  ideaId?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionIdeaVoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionIdeaVoteFilterInput | null> | null;
};

export type ModelSubscriptionStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  color?: ModelSubscriptionStringInput | null;
  step?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionStatusFilterInput | null> | null;
  or?: Array<ModelSubscriptionStatusFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionStatusTransitionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  fromStatusId?: ModelSubscriptionIDInput | null;
  toStatusId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionStatusTransitionFilterInput | null> | null;
  or?: Array<ModelSubscriptionStatusTransitionFilterInput | null> | null;
};

export type GetIdeaWithDepthQueryVariables = {
  id: string;
};

export type GetIdeaWithDepthQuery = {
  getIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      items: Array<{
        __typename: "IdeaComment";
        id: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      items: Array<{
        __typename: "IdeaVote";
        id: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type DeleteStatusMutationVariables = {
  input: DeleteStatusInput;
  condition?: ModelStatusConditionInput | null;
};

export type DeleteStatusMutation = {
  deleteStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteStatusTransitionMutationVariables = {
  input: DeleteStatusTransitionInput;
  condition?: ModelStatusTransitionConditionInput | null;
};

export type DeleteStatusTransitionMutation = {
  deleteStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateIdeaMutationVariables = {
  input: CreateIdeaInput;
  condition?: ModelIdeaConditionInput | null;
};

export type CreateIdeaMutation = {
  createIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type UpdateIdeaMutationVariables = {
  input: UpdateIdeaInput;
  condition?: ModelIdeaConditionInput | null;
};

export type UpdateIdeaMutation = {
  updateIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type DeleteIdeaMutationVariables = {
  input: DeleteIdeaInput;
  condition?: ModelIdeaConditionInput | null;
};

export type DeleteIdeaMutation = {
  deleteIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type CreateIdeaCommentMutationVariables = {
  input: CreateIdeaCommentInput;
  condition?: ModelIdeaCommentConditionInput | null;
};

export type CreateIdeaCommentMutation = {
  createIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateIdeaCommentMutationVariables = {
  input: UpdateIdeaCommentInput;
  condition?: ModelIdeaCommentConditionInput | null;
};

export type UpdateIdeaCommentMutation = {
  updateIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteIdeaCommentMutationVariables = {
  input: DeleteIdeaCommentInput;
  condition?: ModelIdeaCommentConditionInput | null;
};

export type DeleteIdeaCommentMutation = {
  deleteIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateIdeaVoteMutationVariables = {
  input: CreateIdeaVoteInput;
  condition?: ModelIdeaVoteConditionInput | null;
};

export type CreateIdeaVoteMutation = {
  createIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateIdeaVoteMutationVariables = {
  input: UpdateIdeaVoteInput;
  condition?: ModelIdeaVoteConditionInput | null;
};

export type UpdateIdeaVoteMutation = {
  updateIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteIdeaVoteMutationVariables = {
  input: DeleteIdeaVoteInput;
  condition?: ModelIdeaVoteConditionInput | null;
};

export type DeleteIdeaVoteMutation = {
  deleteIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateStatusMutationVariables = {
  input: CreateStatusInput;
  condition?: ModelStatusConditionInput | null;
};

export type CreateStatusMutation = {
  createStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateStatusMutationVariables = {
  input: UpdateStatusInput;
  condition?: ModelStatusConditionInput | null;
};

export type UpdateStatusMutation = {
  updateStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateStatusTransitionMutationVariables = {
  input: CreateStatusTransitionInput;
  condition?: ModelStatusTransitionConditionInput | null;
};

export type CreateStatusTransitionMutation = {
  createStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateStatusTransitionMutationVariables = {
  input: UpdateStatusTransitionInput;
  condition?: ModelStatusTransitionConditionInput | null;
};

export type UpdateStatusTransitionMutation = {
  updateStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIdeaQueryVariables = {
  id: string;
};

export type GetIdeaQuery = {
  getIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type ListIdeasQueryVariables = {
  filter?: ModelIdeaFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIdeasQuery = {
  listIdeas?: {
    __typename: "ModelIdeaConnection";
    items: Array<{
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIdeaCommentQueryVariables = {
  id: string;
};

export type GetIdeaCommentQuery = {
  getIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListIdeaCommentsQueryVariables = {
  filter?: ModelIdeaCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIdeaCommentsQuery = {
  listIdeaComments?: {
    __typename: "ModelIdeaCommentConnection";
    items: Array<{
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IdeaCommentsByIdeaIdQueryVariables = {
  ideaId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIdeaCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IdeaCommentsByIdeaIdQuery = {
  ideaCommentsByIdeaId?: {
    __typename: "ModelIdeaCommentConnection";
    items: Array<{
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IdeaCommentsByUserIdQueryVariables = {
  userId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIdeaCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IdeaCommentsByUserIdQuery = {
  ideaCommentsByUserId?: {
    __typename: "ModelIdeaCommentConnection";
    items: Array<{
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetIdeaVoteQueryVariables = {
  id: string;
};

export type GetIdeaVoteQuery = {
  getIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListIdeaVotesQueryVariables = {
  filter?: ModelIdeaVoteFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIdeaVotesQuery = {
  listIdeaVotes?: {
    __typename: "ModelIdeaVoteConnection";
    items: Array<{
      __typename: "IdeaVote";
      id: string;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IdeaVotesByIdeaIdQueryVariables = {
  ideaId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIdeaVoteFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IdeaVotesByIdeaIdQuery = {
  ideaVotesByIdeaId?: {
    __typename: "ModelIdeaVoteConnection";
    items: Array<{
      __typename: "IdeaVote";
      id: string;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type IdeaVotesByUserIdQueryVariables = {
  userId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelIdeaVoteFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type IdeaVotesByUserIdQuery = {
  ideaVotesByUserId?: {
    __typename: "ModelIdeaVoteConnection";
    items: Array<{
      __typename: "IdeaVote";
      id: string;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetStatusQueryVariables = {
  id: string;
};

export type GetStatusQuery = {
  getStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListStatusesQueryVariables = {
  filter?: ModelStatusFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListStatusesQuery = {
  listStatuses?: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetStatusTransitionQueryVariables = {
  id: string;
};

export type GetStatusTransitionQuery = {
  getStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListStatusTransitionsQueryVariables = {
  filter?: ModelStatusTransitionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListStatusTransitionsQuery = {
  listStatusTransitions?: {
    __typename: "ModelStatusTransitionConnection";
    items: Array<{
      __typename: "StatusTransition";
      id: string;
      fromStatusId: string;
      toStatusId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type StatusTransitionsByFromStatusIdAndToStatusIdQueryVariables = {
  fromStatusId: string;
  toStatusId?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelStatusTransitionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type StatusTransitionsByFromStatusIdAndToStatusIdQuery = {
  statusTransitionsByFromStatusIdAndToStatusId?: {
    __typename: "ModelStatusTransitionConnection";
    items: Array<{
      __typename: "StatusTransition";
      id: string;
      fromStatusId: string;
      toStatusId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type StatusTransitionsByToStatusIdAndFromStatusIdQueryVariables = {
  toStatusId: string;
  fromStatusId?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelStatusTransitionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type StatusTransitionsByToStatusIdAndFromStatusIdQuery = {
  statusTransitionsByToStatusIdAndFromStatusId?: {
    __typename: "ModelStatusTransitionConnection";
    items: Array<{
      __typename: "StatusTransition";
      id: string;
      fromStatusId: string;
      toStatusId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    username: string;
    email?: string | null;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    avatar?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateIdeaSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaFilterInput | null;
  owner?: string | null;
};

export type OnCreateIdeaSubscription = {
  onCreateIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type OnUpdateIdeaSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaFilterInput | null;
  owner?: string | null;
};

export type OnUpdateIdeaSubscription = {
  onUpdateIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type OnDeleteIdeaSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaFilterInput | null;
  owner?: string | null;
};

export type OnDeleteIdeaSubscription = {
  onDeleteIdea?: {
    __typename: "Idea";
    id: string;
    name: string;
    description: string;
    attachments?: Array<string | null> | null;
    statusId?: string | null;
    Status?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Comments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    votes?: {
      __typename: "ModelIdeaVoteConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userIdeasId?: string | null;
    statusIdeasId?: string | null;
  } | null;
};

export type OnCreateIdeaCommentSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaCommentFilterInput | null;
  owner?: string | null;
};

export type OnCreateIdeaCommentSubscription = {
  onCreateIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateIdeaCommentSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaCommentFilterInput | null;
  owner?: string | null;
};

export type OnUpdateIdeaCommentSubscription = {
  onUpdateIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteIdeaCommentSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaCommentFilterInput | null;
  owner?: string | null;
};

export type OnDeleteIdeaCommentSubscription = {
  onDeleteIdeaComment?: {
    __typename: "IdeaComment";
    id: string;
    content: string;
    parentCommentId?: string | null;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    ParentComment?: {
      __typename: "IdeaComment";
      id: string;
      content: string;
      parentCommentId?: string | null;
      ideaId: string;
      userId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    childComments?: {
      __typename: "ModelIdeaCommentConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateIdeaVoteSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaVoteFilterInput | null;
  owner?: string | null;
};

export type OnCreateIdeaVoteSubscription = {
  onCreateIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateIdeaVoteSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaVoteFilterInput | null;
  owner?: string | null;
};

export type OnUpdateIdeaVoteSubscription = {
  onUpdateIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteIdeaVoteSubscriptionVariables = {
  filter?: ModelSubscriptionIdeaVoteFilterInput | null;
  owner?: string | null;
};

export type OnDeleteIdeaVoteSubscription = {
  onDeleteIdeaVote?: {
    __typename: "IdeaVote";
    id: string;
    ideaId: string;
    userId: string;
    Idea?: {
      __typename: "Idea";
      id: string;
      name: string;
      description: string;
      attachments?: Array<string | null> | null;
      statusId?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      userIdeasId?: string | null;
      statusIdeasId?: string | null;
    } | null;
    User?: {
      __typename: "User";
      id: string;
      username: string;
      email?: string | null;
      createdAt: string;
      avatar?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null;
  owner?: string | null;
};

export type OnCreateStatusSubscription = {
  onCreateStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null;
  owner?: string | null;
};

export type OnUpdateStatusSubscription = {
  onUpdateStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null;
  owner?: string | null;
};

export type OnDeleteStatusSubscription = {
  onDeleteStatus?: {
    __typename: "Status";
    id: string;
    name: string;
    description: string;
    color: string;
    ideas?: {
      __typename: "ModelIdeaConnection";
      nextToken?: string | null;
    } | null;
    nextSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    previousSteps?: {
      __typename: "ModelStatusTransitionConnection";
      nextToken?: string | null;
    } | null;
    step: number;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateStatusTransitionSubscriptionVariables = {
  filter?: ModelSubscriptionStatusTransitionFilterInput | null;
  owner?: string | null;
};

export type OnCreateStatusTransitionSubscription = {
  onCreateStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateStatusTransitionSubscriptionVariables = {
  filter?: ModelSubscriptionStatusTransitionFilterInput | null;
  owner?: string | null;
};

export type OnUpdateStatusTransitionSubscription = {
  onUpdateStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteStatusTransitionSubscriptionVariables = {
  filter?: ModelSubscriptionStatusTransitionFilterInput | null;
  owner?: string | null;
};

export type OnDeleteStatusTransitionSubscription = {
  onDeleteStatusTransition?: {
    __typename: "StatusTransition";
    id: string;
    fromStatusId: string;
    toStatusId: string;
    fromStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    toStatus?: {
      __typename: "Status";
      id: string;
      name: string;
      description: string;
      color: string;
      step: number;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
