import React from "react";

interface HeaderProps {
  logo: string | React.ReactNode;
  loginButton: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logo, loginButton }) => {
  return (
    <header className="flex justify-between items-center px-8 py-2 bg-gray-200 h-16 ">
      <div className="logo">{logo}</div>
      <div className="login-button">{loginButton}</div>
    </header>
  );
};

export default Header;
