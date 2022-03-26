import { Button, Space, Table } from "antd"
import axios from 'axios';
import { useEffect, useState } from "react";
import { MoeTools } from "../../moe/moe-tools";
import { CreateAccountDrawer } from "../components/create-account.drawer";

export const AccountsContainer = () => {

    const [createVisible, updateCreatevisible] = useState<boolean>(false);

    const getAccounts = () => {
        
    };

    useEffect(() => {
        axios.get('http://localhost:21001/accounts')
    }, []);

    return <div>
        <MoeTools>
            <Button onClick={() => updateCreatevisible(true)} type="primary">Create</Button>
        </MoeTools>
        <Table>
            <Table.Column title="Username" dataIndex="username" key="username" />
            <Table.Column title="Email" dataIndex="email" key="email" />
            <Table.Column title="Operation" key="operation" render={(record) => {
                return <Space size={8}>
                    <Button type="link">Edit</Button>
                    <Button type="link" danger>Delete</Button>
                </Space>
            }} />
        </Table>
        <CreateAccountDrawer visible={createVisible} onClose={() => updateCreatevisible(false)} />
    </div>
}
