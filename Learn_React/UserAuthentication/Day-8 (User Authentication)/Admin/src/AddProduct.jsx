import React, { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
  });

  let cloud = "dkobnlvze";
  let preset = "myProjectPreset";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = async (e) => {
    let file = e.target.files[0];
    if (!file) return;

    let data = new FormData();
    data.append("file", file);
    data.append("upload_preset", preset);

    let res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    let uploaded = await res.json();
    setFormData({ ...formData, image: uploaded.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Product Added");

    setFormData({
      name: "",
      details: "",
      price: "",
      image: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add New Product</h3>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input type="file" accept="image/*" onChange={(e) => handleFile(e)} />

        <textarea
          name="details"
          placeholder="Product Details"
          value={formData.details}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
