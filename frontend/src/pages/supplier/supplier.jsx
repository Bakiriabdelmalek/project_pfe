import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import { Link } from "react-router-dom";
import classes from "./supplier.module.css"; // Create and import your CSS module
import Sidebar from "../../componenets/Layout/sidebar/sidebar";

const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("/suppliers");
      setSuppliers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch suppliers", error);
      setLoading(false);
    }
  };

  const deleteSupplier = async (id) => {
    try {
      await axios.delete(`/suppliers/${id}`);
      fetchSuppliers(); // Refresh the list after deleting
    } catch (error) {
      console.error("Failed to delete supplier", error);
    }
  };

  if (loading) {
    return <div>Loading suppliers...</div>; // Consider using your LoadingComponent here
  }

  return (


    <div className={classes.container_supplier}>
      <Sidebar />
      <h1>Suppliers</h1>
      <Link to="/suppliers/new">Add New Supplier</Link>
      <table className={classes.supplierTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.address}</td>
              <td>
                <Link to={`/suppliers/edit/${supplier.id}`}>Edit</Link>
                <button onClick={() => deleteSupplier(supplier.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierPage;
