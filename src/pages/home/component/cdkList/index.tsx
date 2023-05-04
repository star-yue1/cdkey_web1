import { Button, Card, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import CustomForm from "@/components/Form";
import CustomTable from "@/components/Table";
import { formOptiom } from "./search";
import { columns } from "./colums";
import { createCdk, getSdkList } from "@/api/sdk";
import { useRequest } from "ahooks";
const SdkList = () => {
  const [query, setQuery] = useState({ page: 0, size: 10 });
  const [data, setData] = useState([]);
  const [total, serTatol] = useState(0);
  const [vis, setVis] = useState(false);
  const [form] = Form.useForm();

  const { runAsync: listAsync, loading: listLoading } = useRequest(getSdkList, { manual: true });
  const { runAsync: createCDKAsync } = useRequest(createCdk, { manual: true });

  const getList = (query: any) => {
    listAsync({ ...query }).then((res) => {
      console.log("res", res);
      setData(res.data);
      serTatol(res.total);
    });
  };
  useEffect(() => {
    getList(query);
  }, [query]);

  const submit = (value: any) => {
    console.log("form value", value);
    setQuery({ ...query, ...value });
  };

  const resetClick = () => {
    setQuery({ page: 0, size: 10 });
  };

  const createCDK = () => {
    form.validateFields().then( async (res) => {
      console.log("createCDK", res);
      await createCDKAsync(res);
      form.resetFields();
      setVis(false);
      resetClick();
    });
  };

  const tableChonge = (props: any) => {
    console.log("props", props);
    setQuery({ ...query, page: props.current - 1, size: props.pageSize });
  };

  return (
    <Card title="CDK管理" style={{ margin: "20px", padding: 0 }}>
      {/* 筛选框 */}
      <CustomForm
        option={formOptiom}
        onSubmit={submit}
        resetClick={resetClick}
      />
      {/* 操作按钮 */}
      <Card
        bordered={false}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          boxShadow: "none",
        }}
      >
        <Button type="primary" onClick={() => setVis(true)}>
          新建
        </Button>
      </Card>
      {/* 列表 */}
      <CustomTable
        loading={listLoading}
        dataSource={data}
        columns={columns}
        pagination={{ current: query.page + 1, pageSize: query.size, total: total }}
        onChange={tableChonge}
      />
      {/* 新建弹窗 */}
      <Modal open={vis} onOk={createCDK} onCancel={() => setVis(false)}>
        <Form form={form} style={{ padding: "24px" }}>
          <Form.Item name="time" label="时长" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default SdkList;
