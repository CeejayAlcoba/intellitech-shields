import { Table } from "../../../utils/components/table/Table";

function SensorsData(props) {
  const data = [
    { id: 1, name: "John Doe", temperature: 25, address: "123 ABC Street" },
    { id: 2, name: "Jane Smith", temperature: 30, address: "456 XYZ Street" },
    { id: 3, name: "Bob Johnson", temperature: 35, address: "789 PQR Street" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Miners Name", dataIndex: "name", key: "name" },
    { title: "Temperature", dataIndex: "temperature", key: "age" },
  ];
  return (
    <>
      <Table data={data} columns={columns} title={"Sensor Data"} />
    </>
  );
}
export { SensorsData };
