import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
const Login: React.FC = () => {
  return (
    <div className="p-10">
      <Authenticator />
    </div>
  );
};

export default Login;
