// Import React and necessary hooks
import React from "react";
// Import your CSS module
import classes from "./dashboard_a.module.css";
// Import the DataCard component
import Datacard from "../../componenets/datacard/datacard";

// Assuming user data and notifications could be fetched or passed as props
const DashboardA = (props) => {
  return (
    <div>
      <div className={classes.fdiv}>
        <h3>Hi, {props.userData.username}</h3>
      </div>

      <div className={classes.main_container}>
        <div className={classes.data_part}>
          <div className={classes.flex_cards}>
            <Datacard
              width="381px"
              height="112px"
              color="#EAEAEA"
              text="Supplier"
              data="7"
            />
            <Datacard
              width="381px"
              height="112px"
              color="#CFFBBA"
              text="Products"
              data="80"
            />
          </div>
          <div className={classes.flex_cards}>
            <Datacard
              width="381px"
              height="112px"
              color="#B9F2FF"
              text="Client"
              data="21"
            />
            <Datacard
              width="381px"
              height="112px"
              color="#FFBEBE"
              text="Alert"
              data="80"
            />
          </div>
          <div className={classes.flex_cards}>
            <Datacard
              width="780px"
              height="112px"
              color="#DEBDFF"
              text="Alert"
              data="80"
            />
          </div>
          <div className={classes.flex_cards}>
            <Datacard
              width="780px"
              height="112px"
              color="#FFE8AC"
              text="Alert"
              data="80"
            />
          </div>
        </div>
        <div className={classes.notification_dashboard}>
          <span>Notifications :</span>
          <div>
            <ul>
              
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.last_order}>
        <span>Last order</span>
      </div>
    </div>
  );
};

export default DashboardA;
