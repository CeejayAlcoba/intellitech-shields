import React from "react";
import { Form, Input, Button } from "antd";
import { FaUserCircle } from "react-icons/fa";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaUserCircle size={50} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          style={{ height: "100px" }}
          src="/images/logo-bg-removed.png"
          alt="Image"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: 300 }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export { Login };
