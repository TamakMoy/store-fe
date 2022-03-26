import { Drawer, DrawerProps } from "antd";
import React from "react"

interface MoeDrawerProps extends DrawerProps {
    children: React.ReactNode;
    visible: boolean;
    title: string;
    onClose: () => void;
}

export const MoeDrawer = (props: MoeDrawerProps) => {
    return <Drawer
        width={540}
        destroyOnClose={true}
        {...props}
    >
        {props.children}
    </Drawer>
}