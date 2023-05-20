import { Table } from "../../../utils/components/table/Table";

function Location(params) {
  const data = [
    {
      id: 1,
      name: "John Doe",
      latitude: 25,
      longitude: 35,
      dateTime: "May 20, 2023 10:30 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      latitude: 30,
      longitude: 35,
      dateTime: "May 20, 2023 10:30 AM",
    },
    {
      id: 3,
      name: "Bob Johnson",
      latitude: 35,
      longitude: 35,
      dateTime: "May 20, 2023 10:30 AM",
    },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "id" },
    { title: "Latitude", dataIndex: "latitude", key: "name" },
    { title: "Longitude", dataIndex: "longitude", key: "age" },
    { title: "Date and Time", dataIndex: "dateTime", key: "address" },
  ];
  return (
    <>
      <Table data={data} columns={columns} title={"Locations"} />
    </>
  );
}
export { Location };
