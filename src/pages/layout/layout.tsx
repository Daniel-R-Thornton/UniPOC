import { Button } from "@aws-amplify/ui-react";
import Header from "components/header/header";
import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthUser, getCurrentUser, signOut } from "@aws-amplify/auth";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  // use effect to get the current user
  // if the user is logged in then< the button should say logout
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (e) {
        setUser(null);
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  const logout = useCallback(() => {
    signOut();
    setUser(null);
    navigate("/");
  }, [navigate]);

  const loginButton = user ? (
    <Button onClick={logout}>Logout</Button>
  ) : (
    <Button onClick={() => navigate("/login")}>Login</Button>
  );
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
