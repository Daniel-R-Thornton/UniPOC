import { Button } from "@aws-amplify/ui-react";
import Header from "components/header/header";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  // check if the user is already logged in if so button should say logout and should log the user out
  const loginButton = <Button onClick={() => navigate("/login")}>Login</Button>;
  return (
    <>
      {/* Your header component */}
      <header>
        <Header logo="Logo" loginButton={loginButton} />
      </header>

      {/* Your main content */}
      <main>
        <Outlet />
      </main>

      {/* !todo add footer */}
      {/* Your footer component */}
      <footer>{/* Footer content */}</footer>
    </>
  );
};

export default Layout;
