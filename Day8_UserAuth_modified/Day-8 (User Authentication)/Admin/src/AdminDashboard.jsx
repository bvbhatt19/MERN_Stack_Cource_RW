import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <h2 style={{ marginTop: "20px" }}>Product List</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            border: "1px solid #ccc",
          }}
        >
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={cellStyle}>#</th>
              <th style={cellStyle}>Product Name</th>
              <th style={cellStyle}>Details</th>
              <th style={cellStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td style={cellStyle}>{index + 1}</td>
                <td style={cellStyle}>{product.productName}</td>
                <td style={cellStyle}>{product.productDetails}</td>
                <td style={cellStyle}>₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Simple inline cell style
const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

export default AdminDashboard;
