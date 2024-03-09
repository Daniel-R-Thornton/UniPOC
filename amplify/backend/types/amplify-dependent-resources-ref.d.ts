export type AmplifyDependentResourcesAttributes = {
  api: {
    unipoc: {
      GraphQLAPIEndpointOutput: "string";
      GraphQLAPIIdOutput: "string";
      GraphQLAPIKeyOutput: "string";
    };
  };
  auth: {
    unipoc7adde9c6: {
      AppClientID: "string";
      AppClientIDWeb: "string";
      IdentityPoolId: "string";
      IdentityPoolName: "string";
      UserPoolArn: "string";
      UserPoolId: "string";
      UserPoolName: "string";
    };
    userPoolGroups: {
      AdminGroupRole: "string";
      UniPocUsersGroupRole: "string";
    };
  };
  storage: {
    UniPocAttachments: {
      BucketName: "string";
      Region: "string";
    };
  };
};
