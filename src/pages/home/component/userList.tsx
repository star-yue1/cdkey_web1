import { Card } from "antd";
import React from "react";
import CustomForm from "@/components/Form";
const UserList = () => {
  console.log("UserList");

  const formOptiom = [
    {
      label: "用户名称",
      name: 'name',
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 18,
      },
      rules: [{ required: true, message: "Please input your username!" }],
    },
  ];
  const submit = (value: any) => {
    console.log('form value', value);
  }
  return (
    <Card title="用户管理" style={{ margin: "20px", padding: 0 }}>
      {/* <div>UserList</div> */}
      <CustomForm option={formOptiom} onSubmit={submit}/>
    </Card>
  );
};

export default UserList;
