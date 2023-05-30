import React, { lazy } from "react";
import Redirect from "@/pages/redirect";
export interface IRouter {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element> | React.ReactNode;
  key: string;
  title: string;
  children?: IRouter[];
  showMenu?: boolean; // 是否需要展示菜单
  auth?: boolean; // 是否需要登陆
}
export const Router = (): IRouter[] => [
  {
    path: "/home",
    component: lazy(() => import("../pages/home")),
    key: "home",
    title: "主页",
    showMenu: true,
    auth: true,
    children: [
      {
        path: "/home/userList",
        component: lazy(() => import("../pages/home/component/userList")),
        key: "home/userList",
        title: "用户列表",
        showMenu: true,
        auth: true,
      },
      {
        path: "/home/cdkList",
        component: lazy(() => import("../pages/home/component/cdkList")),
        key: "home/sdkList",
        title: "cdk列表",
        showMenu: true,
        auth: true,
      },

    ],
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/login")),
    auth: false,
    key: "login",
    title: "登陆",
  },
  {
    path: "/*",
    key: "*",
    title: "",
    component: () => <Redirect to="home" replace={true}/>, // 重定向
  },
];

export const routes = Router()