import React from "react";
import LayoutProps from "./layout.interface";

import "./styles.css";

import { NavigationBar } from "../../../infrastructure/components/navigation-bar";

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="topSectionContainer">
        <NavigationBar />

        <main className="mainContainer">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
