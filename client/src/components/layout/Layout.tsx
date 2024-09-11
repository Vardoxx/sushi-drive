import { useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { layoutItems } from "./layoutItems";
import { Footer } from "antd/es/layout/layout";

const { Header, Content, Sider } = Layout;

export const MyLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const curentPath = location.pathname;

  const handleSelectKey = ({ key }: { key: string }) => {
    navigate(key);
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div />
        <Menu
          theme="dark"
          defaultSelectedKeys={[curentPath]}
          mode="inline"
          items={layoutItems}
          onClick={handleSelectKey}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, backgroundColor: "#1890ff" }}>
          Aboba
        </Header>

        <Content style={{ padding: "16px", backgroundColor: "#002766" }}>
          <Outlet />
        </Content>

        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#1890ff",
            padding: "16px 0px",
          }}
        >
          Sushi Drive ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
