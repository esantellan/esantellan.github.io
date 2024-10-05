import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../../presentation/containers/layouts/main-layout";
import { Home } from "../../presentation/containers/home";
import { Unfound } from "../../presentation/containers/unfound";

const Root: React.FC = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Unfound />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default Root;
