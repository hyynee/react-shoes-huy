import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
//router-dom
import "antd/dist/reset.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplates from "./templates/HomeTemplates";
import Login from "./Pages/admin/Login";
import Home from "./Component/Home";
// redux
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import { connect } from "react-redux";
import Card from "./Component/shoes/Card";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplates></HomeTemplates>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="card">
            <Route path=":id"  element={<Card></Card>}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
</Provider>
);