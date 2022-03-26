import { Layout, Menu } from "antd";
import { ReactChild } from "react";

export const CommonLayout = (props: { children: ReactChild }) => {
    return <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header style={{ backgroundColor: '#333' }}>
            Store
        </Layout.Header>
        <Layout style={{ height: '100%' }}>
            <Layout.Sider theme="light">
                <Menu theme="light">
                    <Menu.Item>
                        账户管理
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content style={{ padding: 24 }}>
                {props.children}
            </Layout.Content>
        </Layout>
    </Layout>
}