import { useEffect, useState } from "react";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:5000/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
    window.addEventListener("blogAdded", fetchBlogs);
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>

      {blogs.map((b) => (
        <div
          key={b._id}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            borderRadius: 5,
            marginBottom: 15,
          }}
        >
          <h3>{b.title}</h3>
          <p>{b.content}</p>
        </div>
      ))}
    </div>
  );
}
