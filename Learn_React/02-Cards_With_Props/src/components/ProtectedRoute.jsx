import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
