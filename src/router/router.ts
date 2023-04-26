import React, { lazy } from "react";
import {
    AppstoreOutlined,
} from "@ant-design/icons";
export interface IRouter {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  key: string;
  title: string;
  icon?: React.ReactNode;
  router?: IRouter[];
}
export const Router = (): IRouter[] => [
  {
    path: "/",
    component: lazy(() => import("../pages/home")),
    key: "home",
    title: "主页",
    icon: AppstoreOutlined,
    router: [
      {
        path: "/userList",
        component: lazy(() => import("../pages/home/component/userList")),
        key: "home/userList",
        title: "用户列表",
      },
      {
        path: "/sdkList",
        component: lazy(() => import("../pages/home/component/sdkList")),
        key: "home/sdkList",
        title: "sdk列表",
      },

    ],
  },
];

export const router = Router()