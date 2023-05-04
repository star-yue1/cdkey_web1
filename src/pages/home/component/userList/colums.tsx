export const columns = [
  {
    title: "用户名",
    dataIndex: "user",
    key: "user",
    width: 200
  },
  {
    title: "密码",
    dataIndex: "password",
    key: "password",
    width: 200
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
    key: "create_time",
    width: 200,
    render:(value) => {
      return value ? new Date(Number(value)).toLocaleString() : '-'
    }
  },
  {
    title: "SDK",
    dataIndex: "sdk",
    key: "sdk",
    width: 200
  },
  {
    title: "天数",
    dataIndex: "time",
    key: "time",
    width: 100,
    render:(_,row: any) => {
      return row?.sdk_info?.time ? row?.sdk_info?.time : '-'
    }
  },
  {
    title: "到期时间",
    dataIndex: "end_time",
    key: "end_time",
    width: 200,
    render:(value) => {
      return value ? new Date(Number(value)).toLocaleString() : '-'
    }
  }
];
