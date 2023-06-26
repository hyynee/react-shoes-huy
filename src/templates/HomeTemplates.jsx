import React from "react";
import Header from "../Component/Header";
// outlet
import { Outlet } from "react-router-dom";
export default function HomeTemplates() {
  return (
    <div className="container">
      <Header></Header>
      <div style={{ minHeight: "80vh" }}>
        <Outlet></Outlet>
      </div>
      <footer className="bg-dark text-white text-center p-3 fs-3">
        FOOTER
      </footer>
    </div>
  );
}
