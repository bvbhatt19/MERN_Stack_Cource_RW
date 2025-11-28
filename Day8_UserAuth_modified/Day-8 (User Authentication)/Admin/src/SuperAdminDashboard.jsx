import React from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import UserManagement from "./UserManagement";

function SuperAdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Super Admin Dashboard</h1>
      <AddProduct />
      <hr />
      <UserManagement />
      <hr />
      <ProductList />
    </div>
  );
}

export default SuperAdminDashboard;
