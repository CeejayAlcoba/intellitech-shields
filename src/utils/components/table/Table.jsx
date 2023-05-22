import React from "react";
import { Button, Table as TableAntD } from "antd";
import { AiOutlineUserAdd } from 'react-icons/ai';
const Table = ({ data, columns, title, isAddButton, buttonIcon, buttonTitle, onClick }) => {
  return (
    <div className="border rounded ">
      <div className="d-flex justify-content-between">
        <h5 style={{ margin: "10px" }}>{title && title}</h5>
        {isAddButton &&
          <Button style={{ margin: "7px" }} type="primary" icon={buttonIcon} onClick={() => onClick()} >{buttonTitle}</Button>
        }
      </div >
      <TableAntD dataSource={data} columns={columns} />
    </div >
  );
};

export { Table };
