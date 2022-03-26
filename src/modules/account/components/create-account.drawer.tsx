import { Form, Input } from "antd";
import { MoeDrawer } from "../../moe/moe-drawer";

export interface CreateAccountDrawerProps {
    visible: boolean;
    onClose: () => void;
}

export const CreateAccountDrawer = (props: CreateAccountDrawerProps) => {
    const [form] = Form.useForm();
    return <MoeDrawer
        visible={props.visible}
        title="创建账户"
        onClose={props.onClose}
    >
        <Form form={form} layout="vertical">
            <Form.Item label="Username" name="username" required rules={[{  }]}>
                <Input placeholder="please input your username" />
            </Form.Item>
        </Form>
    </MoeDrawer>
}