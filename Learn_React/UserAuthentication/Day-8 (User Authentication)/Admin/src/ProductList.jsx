import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:8080/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>All Products</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {p.image && <img src={p.image} alt="product" />}

            <h4>{p.name}</h4>
            <p>{p.details}</p>
            <p>
              <strong>₹{p.price}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
