import React from "react";
import { Table as TableAntD } from "antd";

const Table = ({ data, columns, title }) => {
  return (
    <div className="border rounded ">
      <h5 style={{ margin: "10px" }}>{title && title}</h5>
      <TableAntD dataSource={data} columns={columns} />
    </div>
  );
};

export { Table };
