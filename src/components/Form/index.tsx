import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import style from '@/components/Form/style.module.scss'
interface ICustomForm {
  option: any;
  onSubmit: (value: any) => void;
}
const CustomForm = ({ option, onSubmit }: ICustomForm) => {
  const [form] = Form.useForm();

  const columnNum = 3;
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
        {item.map((item: any, index: number) => (
          <Col span={item.span ?? 24 / columnNum} key={index}>
            <Form.Item {...item} key={item.label} style={{ margin: 0 }}>
              <Input />
            </Form.Item>
          </Col>
        ))}
      </Row>
    ));
  };

  const clickSubmit = () => {
    form.validateFields().then(onSubmit)
  }

  return (
    <div style={{ display: "flex", height: '100%' }}>
      <Form
        // name="form"
        form={form}
        // style={{ flex: 1 }}
        style={style.form}
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        {getCustomOption(option)}
      </Form>
      <div style={{ width: 200, height: '100%', borderLeft: 'solid 1px #ccc' }}>
        <Button type="primary" onClick={clickSubmit}>提交</Button>
      </div>
    </div>
  );
};

export default CustomForm;
