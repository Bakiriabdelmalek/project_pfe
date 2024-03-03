import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sidebar.module.css";
import client from "../../../assets/dashboard/client.png";
import supplier from "../../../assets/dashboard/supplier.png";
import product from "../../../assets/dashboard/product.png";
import notification from "../../../assets/dashboard/notification.png";
import table from "../../../assets/dashboard/table.png";
import user from "../../../assets/dashboard/user.png";

const Sidebar = (props) => {

 
  return (
    <React.Fragment>
      <div className={classes.main_sidebar}>
        <div className={classes.itemsets_container}>
          <ul className={classes.list_siderbar}>
            <li
              style={
                props.thisPage === "Dashboard"
                  ? { backgroundColor: "#DFE0E2", fontWeight: "bold" }
                  : null
              }
            >
              <Link className={classes.linko} to="/dashboard">
                <div>
                  <img src={table} alt="Tableau de bord" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
            <li
              style={
                props.thisPage === "Product"
                  ? { backgroundColor: "#DFE0E2", fontWeight: "bold" }
                  : null
              }
            >
              <Link className={classes.linko} to="/product">
                <div>
                  <img src={product} alt="Product" />
                  <span>Product</span>
                </div>
              </Link>
            </li>
            {/* If the following Links are not supposed to navigate, consider replacing them with divs or spans */}
            <li>
              <Link className={classes.linko} to="/client">
                <div>
                  <img src={client} alt="Client" />
                  <span>Client</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className={classes.linko} to="/suppliers">
                <div>
                  <img src={supplier} alt="Suppliers" />
                  <span>Suppliers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className={classes.linko} to="/notification">
                <div>
                  <img src={notification} alt="Notification" />
                  <span>Notification</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className={classes.linko} to="/user">
                <div>
                  <img src={user} alt="Utilisateur" />
                  <span>Utilisateur</span>
                </div>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
