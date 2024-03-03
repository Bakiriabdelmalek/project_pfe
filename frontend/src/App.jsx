import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";

import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Signupyuki from "./pages/Auth/SignupYuki";
import Product from "./pages/products/product";
import SupplierPage from "./pages/supplier/supplier";

import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup-yuki" element={<Signupyuki />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard thisPage={"Dashboard"} />}
          />
          <Route path="/product" element={<Dashboard thisPage={"Product"} />} />

          <Route path="/suppliers" element={<SupplierPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
