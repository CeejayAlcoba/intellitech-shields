import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "../../pages/dashboard/pages";
import { Login } from "../../pages/login/pages";
import { Sidebar } from "../../utils/layouts/sidebar/SideBar";
import { HeaderBar } from "../../utils/layouts/headerbar/HeaderBar";
import { PageLayout } from "../../utils/layouts/pageLayout/PageLayout";
import { HelmetUsers } from "../../pages/helmetUsers/pages/indesx";
import { SensorsData } from "../../pages/sensorsData/pages";
import { EnvironmentalCondition } from "../../pages/Environment/pages";
import { Location } from "../../pages/location/pages";
import { EmergencyAlarm } from "../../pages/emergencyAlarm/pages";
import { SignUp } from "../../pages/signup/pages";
import { Users } from "../../pages/userAccounts/pages";
function AuthorizeRoutes({ user, handleLogin, handleLogout }) {
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Router>
        {user ? (
          <>
            <PageLayout user={user} handleLogout={handleLogout}>
              <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/helmet-users" element={<HelmetUsers />} />
                <Route path="/sensors-data" element={<SensorsData />} />
                <Route
                  path="/environmental-condition"
                  element={<EnvironmentalCondition />}
                />
                <Route path="/location" element={<Location />} />
                <Route path="/emergency-alarm" element={<EmergencyAlarm />} />
              </Routes>
            </PageLayout>
          </>
        ) : (
          <Routes>
            <Route path="*" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp handleLogin={handleLogin} />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export { AuthorizeRoutes };
