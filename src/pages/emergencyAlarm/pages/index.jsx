import { Table } from "../../../utils/components/table/Table";

function EmergencyAlarm(params) {
  const data = [
    {
      id: 1,
      minersName: "John Doe",
      helmetId: 1001,
      dateTime: "May 20, 2023 10:30 AM",
      location: "",
    },
    {
      id: 2,
      minersName: "Jane Smith",
      helmetId: 1002,
      dateTime: "May 20, 2023 10:30 AM",
      location: "",
    },
    {
      id: 3,
      minersName: "Bob Johnson",
      helmetId: 1003,
      dateTime: "May 20, 2023 10:30 AM",
      location: "",
    },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Miners Name", dataIndex: "minersName", key: "name" },
    { title: "Helmet Id", dataIndex: "helmetId", key: "age" },
    { title: "Date and Time", dataIndex: "dateTime", key: "address" },
    { title: "Location", dataIndex: "location", key: "address" },
  ];
  return (
    <>
      <Table data={data} columns={columns} title={"Emergency Alarm Log"} />
    </>
  );
}
export { EmergencyAlarm };
