export type AmplifyDependentResourcesAttributes = {
  api: {
    unipoc: {
      GraphQLAPIEndpointOutput: "string";
      GraphQLAPIIdOutput: "string";
      GraphQLAPIKeyOutput: "string";
    };
  };
  auth: {
    unipoc36bc00de: {
      AppClientID: "string";
      AppClientIDWeb: "string";
      CreatedSNSRole: "string";
      HostedUIDomain: "string";
      IdentityPoolId: "string";
      IdentityPoolName: "string";
      OAuthMetadata: "string";
      UserPoolArn: "string";
      UserPoolId: "string";
      UserPoolName: "string";
    };
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
  function: {
    unipoc45a85c66CreateAuthChallenge: {
      Arn: "string";
      LambdaExecutionRole: "string";
      LambdaExecutionRoleArn: "string";
      Name: "string";
      Region: "string";
    };
    unipoc45a85c66CustomMessage: {
      Arn: "string";
      LambdaExecutionRole: "string";
      LambdaExecutionRoleArn: "string";
      Name: "string";
      Region: "string";
    };
    unipoc45a85c66DefineAuthChallenge: {
      Arn: "string";
      LambdaExecutionRole: "string";
      LambdaExecutionRoleArn: "string";
      Name: "string";
      Region: "string";
    };
    unipoc45a85c66PostConfirmation: {
      Arn: "string";
      LambdaExecutionRole: "string";
      LambdaExecutionRoleArn: "string";
      Name: "string";
      Region: "string";
    };
    unipoc45a85c66VerifyAuthChallengeResponse: {
      Arn: "string";
      LambdaExecutionRole: "string";
      LambdaExecutionRoleArn: "string";
      Name: "string";
      Region: "string";
    };
  };
  storage: {
    UniPocAttachments: {
      BucketName: "string";
      Region: "string";
    };
    UniPocStorage: {
      BucketName: "string";
      Region: "string";
    };
  };
};
