import { Card } from "antd";
import React, { useEffect, useState } from "react";
import CustomForm from "@/components/Form";
import CustomTable from "@/components/Table";
import { formOptiom } from "./search";
import { columns } from "./colums";
import { useRequest } from "ahooks";
import { getUserList } from "@/api/user";
const UserList = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({ page: 0, size: 10 });
  
  const { runAsync: getList } = useRequest(getUserList, { manual: true });

  useEffect(() => {
    getList(query).then(res => {
      setData(res.data)
    })
  }, [query])

  const submit = (value: any) => {
    const { page, size} = query;
    setQuery({ page, size, ...value })
  };

  const reset = () => {
    setQuery({ page: 0, size: 10 });
  }

  return (
    <Card title="用户管理" style={{ margin: "20px", padding: 0 }}>
      <CustomForm option={formOptiom} onSubmit={submit} resetClick={reset}/>
      <div style={{ height: "24px" }}></div>
      <CustomTable dataSource={data} columns={columns} />
    </Card>
  );
};

export default UserList;
