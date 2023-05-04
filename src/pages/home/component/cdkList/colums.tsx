import { STATUS, STATUS_MAP } from "./constants";

export const columns = [
  {
    title: "SDK",
    dataIndex: "sdk",
    key: "sdk",
    width: "200",
  },
  {
    title: "时长",
    dataIndex: "time",
    key: "time",
    width: "200",
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
    key: "create_time",
    width: "200",
    render: (value) => {
      return new Date(Number(value)).toLocaleString();
    },
  },
  {
    title: "开始使用时间",
    dataIndex: "start_time",
    key: "start_time",
    width: "200",
    render: (value) => {
      return value ? new Date(Number(value)).toLocaleString() : "-";
    },
  },
  {
    title: "结束使用时间",
    dataIndex: "end_time",
    key: "end_time",
    width: "200",
    render: (value) => {
      return value ? new Date(Number(value)).toLocaleString() : "-";
    },
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    width: "200",
    render: (value: STATUS) => {
      return STATUS_MAP[value];
    },
  },
];
