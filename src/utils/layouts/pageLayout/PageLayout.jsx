// import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { useState } from 'react';
// import { Sidebar } from '../sidebar/SideBar';
// import { HeaderBar } from '../headerbar/HeaderBar';
// const { Header, Content, Footer, Sider } = Layout;
// const PageLayout = ({ children }) => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     return (
//         <Layout
//             style={{
//                 minHeight: '100vh',
//             }}
//         >
//             <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
//             <Layout>
//                 <HeaderBar />
//                 {/* <Header
//                     style={{
//                         padding: 0,
//                         background: colorBgContainer,
//                     }}
//                 /> */}
//                 <Content
//                     style={{
//                         margin: '0 16px',
//                     }}
//                 >
//                     <Breadcrumb
//                         style={{
//                             margin: '16px 0',
//                         }}
//                     >
//                         {/* <Breadcrumb.Item>User</Breadcrumb.Item>
//                         <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
//                     </Breadcrumb>
//                     <div
//                         style={{
//                             padding: 24,
//                             minHeight: 360,
//                             background: colorBgContainer,
//                         }}
//                     >
//                         <div className='overflow-auto h-100'>
//                             {children}
//                         </div>

//                     </div>
//                 </Content>
//                 <Footer
//                     style={{
//                         textAlign: 'center',
//                     }}
//                 >
//                     Ant Design ©2023 Created by Ant UED
//                 </Footer>
//             </Layout>
//         </Layout>
//     );
// };
// export { PageLayout };

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Sidebar } from "../sidebar/SideBar";
import { HeaderBar } from "../headerbar/HeaderBar";
const { Header, Content, Footer } = Layout;
const PageLayout = ({ children }) => {
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
        <HeaderBar />
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
