import React from "react";
import classes from "./table.module.css";
import image from "../../assets/table/pencil.svg"
import image2 from "../../assets/table/plus.svg"

// Ensure the component receives `data` as a prop
const TableComponent = ({ data }) => {
  // Check if data is available
  if (!data || !data.headers || !data.rows) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <div>
        <div>
          <h3></h3>
          <span></span>
        </div>

        <div className={classes.second_half}>
          <button>
            <img src={image} alt="pencil" />
            <span>Modifier</span>
          </button>
          <button>
            <img src={image2} alt="plus" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            {/* Use the data prop to map headers */}
            {data.headers.map((header, index) => (
              <th key={index}>{header}</th> // Updated to use index as key
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Use the data prop to map rows */}
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td> // CellIndex used for key
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
