import { Table } from "../../../utils/components/table/Table";

function EnvironmentalCondition(props) {
  const data = [
    // { id: 1, name: "John Doe", age: 25, address: "123 ABC Street" },
    // { id: 2, name: "Jane Smith", age: 30, address: "456 XYZ Street" },
    // { id: 3, name: "Bob Johnson", age: 35, address: "789 PQR Street" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "temperature", dataIndex: "temperature", key: "age" },
    { title: "humidity", dataIndex: "humidity", key: "address" },
    { title: "Air Quality", dataIndex: "airQuality", key: "gasConcentration" },
    {
      title: "Gas Concentration",
      dataIndex: "gasConcentration",
      key: "gasConcentration",
    },
    {
      title: "Date and Time",
      dataIndex: "dateTime",
      key: "gasConcentration",
    },
  ];
  return (
    <>
      <Table data={data} columns={columns} title={"Environmental Conditions"} />
    </>
  );
}
export { EnvironmentalCondition };
