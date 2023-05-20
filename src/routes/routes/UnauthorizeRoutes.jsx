import { Router, Routes } from "react-router-dom";
import { AuthorizeRoutes } from "./AuthorizeRoutes";

function UnauthorizeRoutes(params) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
