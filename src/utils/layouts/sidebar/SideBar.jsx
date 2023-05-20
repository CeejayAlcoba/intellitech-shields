import React from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  AimOutlined,
  AntCloudOutlined,
  DatabaseOutlined,
  UserOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./sidebar.css";
const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0, paddingTop: "20px" }}
      >
        <Menu.Item key="1" icon={<DesktopOutlined />}>
          <Link to="/" className="text-decor">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/helmet-users" className="text-decor">
            Helmet Users
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DatabaseOutlined />}>
          <Link to="/sensors-data" className="text-decor">
            Sensors Data
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AntCloudOutlined />}>
          <Link to="/environmental-condition" className="text-decor">
            Environment
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<AimOutlined />}>
          <Link to="/location" className="text-decor">
            Location
          </Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<AlertOutlined />}>
          <Link to="/emergency-alarm" className="text-decor">
            Emergency Alarm
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export { Sidebar };
