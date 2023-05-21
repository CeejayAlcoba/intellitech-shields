
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Sidebar } from "../sidebar/SideBar";
import { HeaderBar } from "../headerbar/HeaderBar";
const { Header, Content, Footer } = Layout;
const PageLayout = ({ children,user }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <HeaderBar username={user} />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          InteliTech Shields ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export { PageLayout };
