// Assuming this is in Product.jsx or a similar file

import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./product.module.css";
// Import Sidebar if you plan to use it, omitted here for brevity
import Datacard from "../../componenets/datacard/datacard";
import TableComponent from "../../componenets/tables/table";

const Product = (props) => {
  const [products, setProducts] = useState([]); // Initialize products as an array

  useEffect(() => {
    axios
      .get("/products", { withCredentials: true })
      .then((response) => {
        // Ensure response.data is the array you expect; adjust accordingly
        if (Array.isArray(response.data)) {
          console.log(response.data[0].category.name)
          setProducts(response.data);
        } else {
          console.error(
            "Expected an array of products, but got:",
            response.data
          );
          // Handle non-array responses gracefully, perhaps set to an empty array or a default value
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the products:", error);
      });
  }, []); // Dependency array left empty to run effect once on mount

  return (
    <React.Fragment>
      <div className={classes.product_container}>
        <div className={classes.header_cards}>
          {/* Example usage of Datacard; adjust as necessary */}
          <Datacard
            width="541px"
            height="112px"
            color="#EAEAEA"
            text="Supplier"
            data="7"
          />
          {/* Assuming there's another Datacard or other components to render */}
        </div>

        <div className={classes.full_table}>
          
          
          {Array.isArray(products) && products.length > 0 ? (
            <TableComponent
              data={{
                headers: ["Category", "Name", "Header 3"],
                rows: products.map((product) => [
                  product.category.name,
                  product.name,
                  product.supplier.name,
                ]),
              }}
            />
          ) : (
            <p>No products data available.</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;