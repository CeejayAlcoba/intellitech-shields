import { useState } from "react";
import { Table } from "../../../utils/components/table/Table"
import { SignUp } from "../../signup/pages"
import { AiOutlineUserAdd } from 'react-icons/ai';
function Users(params) {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const data = [
        // {
        //     id: 1,
        //     name: "John Doe",
        //     helmetNo: 1001,
        //     employeeNo: 1001,
        //     email: "street909@gmail.com",
        //     phoneNo: "0999999999",
        // },
        // {
        //     id: 2,
        //     name: "Jane Smith",
        //     helmetNo: 1002,
        //     employeeNo: 1002,
        //     email: "street909@gmail.com",
        //     phoneNo: "0999999999",
        // },
        // {
        //     id: 3,
        //     name: "Bob Johnson",
        //     helmetNo: 1003,
        //     employeeNo: 1003,
        //     email: "street909@gmail.com",
        //     phoneNo: "0999999999",
        // },
    ];

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Username", dataIndex: "helmetNo", key: "name" },
        { title: "Email", dataIndex: "email", key: "address" },
        { title: "Phone No", dataIndex: "phoneNo", key: "address" },
    ];
    return (
        <>
            <SignUp visible={visible} handleOk={handleOk} handleCancel={handleCancel} />
            <Table
                data={data}
                columns={columns}
                title={"User Accounts"}
                isAddButton={true}
                buttonIcon={<AiOutlineUserAdd />}
                buttonTitle={"Create"}
                onClick={showModal}
            />
        </>
    )
}
export { Users }