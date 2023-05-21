import logo from "./logo.svg";
import "./App.css";
import { AuthorizeRoutes } from "./routes/routes/AuthorizeRoutes";
import { Sidebar } from "./utils/layouts/sidebar/SideBar";
import { PageLayout } from "./utils/layouts/pageLayout/PageLayout";
import Dashboard from "./pages/dashboard/pages";
import { useEffect, useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    setUser(localUser)
  }, [])
  const handleLogin = (data) => {
    setUser(JSON.stringify(data))
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <>
      <AuthorizeRoutes user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
    </>
  );
}

export default App;
