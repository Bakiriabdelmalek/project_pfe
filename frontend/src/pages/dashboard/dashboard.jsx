import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import classes from "./dashboard.module.css";
import Sidebar from "../../componenets/Layout/sidebar/sidebar";
import { useNavigate } from "react-router-dom";
import Datacard from "../../componenets/datacard/datacard";
import LoadingComponent from "../../componenets/loadingComponent";
import { Navigate } from "react-router-dom";
import { setAuthorized } from "../../features/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../../store";
import DashboardA from "../dashboarda/dashboard_a";
import Product from "../products/product";
// Import other components you might navigate to

// You can add more imports as per your component structure

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ id: "", username: "", email: "" });

  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuthorization = async () => {
      try {
        const response = await axios.get("/auth/verify", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser({
            username: response.data.user.username,
            id: response.data.user.id,
            email: response.data.user.email,
          });
          dispatch(setAuthorized(true));
        } else {
          dispatch(setAuthorized(false));
          navigate("/login");
        }
      } catch (error) {
        console.error("Authorization verification failed", error);
        dispatch(setAuthorized(false));
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuthorization();
  }, [dispatch, navigate]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!isAuthorized) {
    return navigate("/login");
  }

  // Function to determine which component to render
  const renderPage = () => {
    switch (props.thisPage) {
      case "Dashboard":
        return <DashboardA userData={user} />;
      case "Product":
        return <Product userData={user} />;

      // Add more cases as needed for different pages
      default:
        return <div>Page not found</div>; // Default case if thisPage doesn't match
    }
  };

  return (
    <Provider store={store}>
      <React.Fragment>
        <div className={classes.dashboard_container}>
          <Sidebar thisPage={props.thisPage} />
          <div className={classes.dashboard_all}>
            {renderPage()} {/* Call the renderPage function */}
          </div>
        </div>
      </React.Fragment>
    </Provider>
  );
};

export default Dashboard;
