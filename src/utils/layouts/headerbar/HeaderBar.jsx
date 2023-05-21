import React from "react";
import { Layout, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const HeaderBar = ({ handleLogout }) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const logout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
        localStorage.removeItem("user")
      }
    });
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => logout()}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ background: "#fff", padding: 0 }}>
      {console.log(user)}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 ",
          marginRight: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <img
            style={{ height: "75px" }}
            src="/images/logo-bg-removed.png"
            alt="Image"
          />
        </h1>
        <Dropdown overlay={menu} placement="bottomRight" trigger={["hover"]}>
          <span style={{ cursor: "pointer" }}>
            <UserOutlined /> {user ? user.username : "Username"}
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export { HeaderBar };
