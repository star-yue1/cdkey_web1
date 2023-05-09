import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
// import style from '@/components/Form'
interface ICustomForm {
  option: any;
  onSubmit: (value: any) => void;
  resetClick?: () => void;
}
const CustomForm = ({ option, onSubmit, resetClick }: ICustomForm) => {
  const [form] = Form.useForm();

  const columnNum = 3;

  const getComponent = (item: any) => {
    console.log('type', item);
    const { type, option } = item;
    if (type === "input") {
      return <Input />;
    }
    if (type === "select") {
      return <Select options={option}/>;
    }

    return <Input />;
  };

  const getCustomOption = (option: any) => {
    const formatOption = option.reduce((pre: any, cur: any, index: number) => {
      if (index % columnNum) {
        pre[pre.length - 1].push(cur);
      } else {
        pre.push([cur]);
      }
      return pre;
    }, []);
    return formatOption.map((item: any, index: number) => (
      <Row align="middle" key={index}>
        {item.map((item: any, index: number) => {
          const {
            span,
            labelCol = { span: 6 },
            wrapperCol = { span: 18 },
          } = item;
          return (
            <Col span={span ?? 24 / columnNum} key={index}>
              <Form.Item
                {...{ labelCol, wrapperCol }}
                {...item}
                key={item.label}
                style={{ margin: 0 }}
              >
                {/* <Input /> */}
                {getComponent(item)}
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    ));
  };

  const clickSubmit = () => {
    form.validateFields().then(onSubmit);
  };
  const clickReset = () => {
    form.resetFields();
    // onSubmit({});
    resetClick?.();
  }
  return (
    <div style={{ display: "flex", height: "100%",marginBottom: "20px" }}>
      <Form
        // name="form"
        form={form}
        style={{ flex: 1 }}
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        {getCustomOption(option)}
      </Form>
      <div style={{ width: 200, height: "100%", borderLeft: "solid 1px #ccc", display: 'flex', justifyContent: "space-around" }}>
        <Button type="primary" onClick={clickSubmit}>
          提交
        </Button>
        <Button onClick={clickReset}>
          重置
        </Button>
      </div>
    </div>
  );
};

export default CustomForm;
