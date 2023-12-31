import { Form, Input } from "antd";
import { t } from "i18next";

const LastNameInput: React.FC = () => {
  return (
    <Form.Item
      label={t("lastName")}
      name={"lastName"}
      rules={[{ required: true, message: t("lastNameIsRequired") }]}
      required
    >
      <Input />
    </Form.Item>
  );
};

export default LastNameInput;
