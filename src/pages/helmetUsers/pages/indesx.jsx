import { Table } from "../../../utils/components/table/Table";

function HelmetUsers(props) {
  const data = [
    {
      id: 1,
      name: "John Doe",
      helmetNo: 1001,
      employeeNo: 1001,
      email: "street909@gmail.com",
      phoneNo: "0999999999",
    },
    {
      id: 2,
      name: "Jane Smith",
      helmetNo: 1002,
      employeeNo: 1002,
      email: "street909@gmail.com",
      phoneNo: "0999999999",
    },
    {
      id: 3,
      name: "Bob Johnson",
      helmetNo: 1003,
      employeeNo: 1003,
      email: "street909@gmail.com",
      phoneNo: "0999999999",
    },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Helmet No", dataIndex: "helmetNo", key: "name" },
    { title: "Employee No", dataIndex: "employeeNo", key: "age" },
    { title: "Email", dataIndex: "email", key: "address" },
    { title: "Phone No", dataIndex: "phoneNo", key: "address" },
  ];
  return (
    <>
      <Table data={data} columns={columns} title={"Helmet Users"} />
    </>
  );
}
export { HelmetUsers };
