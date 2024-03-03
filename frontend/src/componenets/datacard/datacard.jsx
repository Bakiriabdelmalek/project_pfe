// Correcting the import path
import React from "react";
import classes from "./datacard.module.css"; // Corrected path

const Datacard = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.color, // Ensure you're using backgroundColor for colors
        }}
        className={classes.main_datacard}
      >
        <div>
          <span className={classes.span_card_text}>{props.text}</span>
          <span className={classes.span_card_data}>{props.data}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Datacard;
