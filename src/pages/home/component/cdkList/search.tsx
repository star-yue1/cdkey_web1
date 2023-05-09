import { STATUS, STATUS_MAP } from "./constants";

export const formOptiom = [
    {
      label: "cdk",
      name: 'cdk',
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      option: Object.keys(STATUS_MAP).map((key) => ({ label: STATUS_MAP[key as unknown as STATUS], value: key}))
    }
  ];