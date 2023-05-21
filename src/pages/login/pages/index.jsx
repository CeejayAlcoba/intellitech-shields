import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserLogin } from "../../../services/UserService";

const Login = ({ handleLogin }) => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setIsLoading(true)
      const user = await UserLogin(values);
      localStorage.setItem("user", JSON.stringify(user.data))
      handleLogin(user?.data)
      setIsLoading(false)

    }
    catch (e) {
      setIsLoading(false)
      setError(e.response.data && e.response.data)
    }
  };
  const onErrorChange = () => {
    setError(null);
  };


  return (
    <div
      style={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="border rounded p-2 bg-light">
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
          <label className="text-danger">{error && error}</label>
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
            onValuesChange={onErrorChange}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={isLoading}
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <div style={{ textAlign: "center" }}>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export { Login };
