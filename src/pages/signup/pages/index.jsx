// import React from "react";
// import { Form, Input, Button, Modal } from "antd";
// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AddUser } from "../../../services/UserService";
// import Swal from "sweetalert2";
// import { Login } from "../../login/pages";

// const SignUp = ({ visible, handleOk, handleCancel }) => {
//   const [form] = Form.useForm();
//   const onFinish = async (values) => {
//     try {
//       await AddUser(values);
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'New user successfully added',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }
//     catch {

//     }

//   };

//   return (
//     <Modal
//       title="Create"
//       visible={visible}
//       onOk={handleOk}
//       onCancel={handleCancel}
//       okText={"Create"}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Form
//           name="signup-form"
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           style={{ width: 300 }}
//         >
//           <Form.Item
//             name="name"
//             rules={[{ required: true, message: "Please input your name!" }]}
//           >
//             <Input placeholder="Name" />
//           </Form.Item>
//           <Form.Item
//             name="username"
//             rules={[
//               { required: true, message: "Please input your username!" },
//               {
//                 min: 6,
//                 message: "Username must be at least 6 characters long!",
//               },
//             ]}
//           >
//             <Input placeholder="Username" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             rules={[
//               { required: true, message: "Please input your email address!" },
//               { type: "email", message: "Please enter a valid email address!" },
//             ]}
//           >
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item
//             name="phoneNumber"
//             rules={[
//               { required: false },
//               {
//                 pattern: /^\d{11}$/,
//                 message: "Please enter a valid phone number!",
//               },
//             ]}
//           >
//             <Input placeholder="Phone Number" type="tel" />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             rules={[
//               { required: true, message: "Please input your password!" },
//               {
//                 min: 6,
//                 message: "Password must be at least 6 characters long!",
//               },
//             ]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>
//           <Form.Item
//             name="confirmPassword"
//             dependencies={["password"]}
//             rules={[
//               { required: true, message: "Please confirm your password!" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Passwords do not match!"));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password placeholder="Confirm Password" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Sign up
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </Modal>

//   );
// };

// export { SignUp };
import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AddUser } from "../../../services/UserService";
import Swal from "sweetalert2";
import { Login } from "../../login/pages";

const SignUp = ({ visible, handleCancel }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await AddUser(values);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New user successfully added',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalOk = () => {
    form.validateFields()
      .then((values) => {
        form.resetFields();
        onFinish(values);
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const handleModalCancel = () => {
    form.resetFields();
    handleCancel();
  };

  return (
    <Modal
      title="Create new user"
      visible={visible}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      okText={"Create"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          form={form}
          name="signup-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: 300 }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                min: 6,
                message: "Username must be at least 6 characters long!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: false },
              {
                pattern: /^\d{11}$/,
                message: "Please enter a valid phone number!",
              },
            ]}
          >
            <Input placeholder="Phone Number" type="tel" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export { SignUp };
