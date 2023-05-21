import logo from "./logo.svg";
import "./App.css";
import { AuthorizeRoutes } from "./routes/routes/AuthorizeRoutes";
import { Sidebar } from "./utils/layouts/sidebar/SideBar";
import { PageLayout } from "./utils/layouts/pageLayout/PageLayout";
import Dashboard from "./pages/dashboard/pages";
import { useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);

  return (
    <>
        <button onClick={() => setUser(user ? null : "Ceejay")}>
          Test {user}
        </button>
        <AuthorizeRoutes user={user} />
    </>
  );
}

export default App;
