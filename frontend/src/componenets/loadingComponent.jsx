// LoadingComponent.jsx
import React from "react";
import { PropagateLoader } from "react-spinners";

const LoadingComponent = () => (
  
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection:"column",
        
      }}
    >
      <PropagateLoader
        color="rgba(19, 140, 251, 1)"
        size={40}
        speedMultiplier={0.8}
      />
      <h2 style={{marginTop:"100px",marginLeft:"80px"}}>Loading ...</h2>
    </div>
    
  
);

export default LoadingComponent;
