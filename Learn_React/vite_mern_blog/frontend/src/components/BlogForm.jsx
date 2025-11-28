import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addBlog = async () => {
    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");

    window.dispatchEvent(new Event("blogAdded"));
  };

  return (
    <div>
      <h2>Add New Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", padding: 10, height: 120 }}
      />

      <br />
      <button onClick={addBlog} style={{ marginTop: 10 }}>
        Add Blog
      </button>
    </div>
  );
}
