// Home.js
import React from "react";
import NavBar from "../../componenets/Layout/header/navBar";
import classes from "./home.module.css";
import ReactBot from "../../componenets/chatbot/chatbot";
import { useState, useEffect } from "react";
import axios from "../../services/axios";
import Sidebar from "../../componenets/Layout/sidebar/sidebar";
const Home = () => {
 

  return (
    <React.Fragment>
      <div className={classes.home_container}>
        <NavBar thispage={"home"} />
        
        <h1>Welcome to Our Website</h1>
        <p>This is the home page. Feel free to explore our site.</p>
        <p className={classes.fi}>hello mr</p>
      </div>
      <ReactBot />
    </React.Fragment>
  );
};

export default Home;
