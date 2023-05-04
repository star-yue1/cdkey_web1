import { Table } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import React from "react";

interface ITable {
  dataSource: any[];
  columns: ColumnsType<any>;
  total?: number;
}
function CustomTable(props: ITable & TableProps<any>) {
  return <Table {...props} />;
}

export default CustomTable;
