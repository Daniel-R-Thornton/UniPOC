import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import Login from "../login/login";
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* login route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
