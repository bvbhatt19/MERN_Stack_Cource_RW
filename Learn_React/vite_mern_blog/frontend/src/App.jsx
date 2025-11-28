import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

export default function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>Simple MERN Blog (Vite)</h1>

      <BlogForm />
      <hr style={{ margin: "20px 0" }} />
      <BlogList />
    </div>
  );
}
