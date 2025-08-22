import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import productsData from "./components/product.json";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Setting from "./components/Setting";
import Admin from "./components/Admin";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAdmin = true;

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Cards items={productsData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Setting />} />
            <Route
              path="admin"
              element={
                <ProtectedRoute isAllowed={isAdmin}>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
