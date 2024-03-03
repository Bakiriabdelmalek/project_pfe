import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navBar.module.css";

const NavBar = (props) => {
  const [borderShown, setBorderShown] = useState({
    home: false,
    categories: false,
    aboutUs: false,
  });
  const [hoverin, sethoverin] = useState("");
  // Function to show border for a specific item
  const showBorder = (item) => {
    setBorderShown((prev) => ({ ...prev, [item]: true }));
  };
  console.log(props.thispage == "home");
  // Function to hide border for a specific item
  const hideBorder = (item) => {
    setBorderShown((prev) => ({ ...prev, [item]: false }));
  };
  return (
    <div className={classes.main}>
      <nav>
        <ul>
          <li
            onMouseEnter={() => sethoverin("homeh")}
            onMouseLeave={() => sethoverin("")}
          >
            <Link className={classes.Link_des} to="/">
              Home
              <div
                style={
                  props.thispage === "home" || hoverin === "home"
                    ? { width: "100%" }
                    : { width: "0" }
                }
                className={classes.border}
              ></div>
            </Link>
          </li>
          <li
            onMouseEnter={() => sethoverin("categorie")}
            onMouseLeave={() => sethoverin("")}
          >
            <Link className={classes.Link_des} to="/categories">
              Categories
              <div
                className={classes.border}
                style={
                  hoverin === "categorie" || props.thispage === "categorie"
                    ? { width: "100%" }
                    : { width: "0" }
                }
              ></div>
            </Link>
          </li>
          <li
            onMouseEnter={() => sethoverin("aboutus")}
            onMouseLeave={() => sethoverin("")}
          >
            <Link className={classes.Link_des} to="/about-us">
              About Us
              <div
                style={
                  hoverin === "aboutus" || props.thispage === "aboutus"
                    ? { width: "100%" }
                    : { width: "0" }
                }
                className={classes.border}
              ></div>
            </Link>
          </li>
          <li
            onMouseEnter={() => sethoverin("element")}
            onMouseLeave={() => sethoverin("")}
          >
            <Link className={classes.Link_des} to="/about-us">
              Element
              <div
                style={
                  hoverin === "element" || props.thispage === "element"
                    ? { width: "100%" }
                    : { width: "0" }
                }
                className={classes.border}
              ></div>
            </Link>
          </li>
          <li
            onMouseEnter={() => sethoverin("Syuki")}
            onMouseLeave={() => sethoverin("")}
          >
            <Link className={classes.Link_des} to="/signup-yuki">
              Sign up via YUKI
              <div
                style={
                  hoverin === "Syuki" || props.thispage === "Syuki"
                    ? { width: "100%" }
                    : { width: "0" }
                }
                className={classes.border}
              ></div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
