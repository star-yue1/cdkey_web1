import React, { Suspense } from "react";
import { useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./router";

// 实现路由
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <Suspense fallback={<div>路由加载中...</div>}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    );
    return item;
  });
};
const Router = () => {
  return useRoutes(generateRouter(routes));
};

//根据路径获取路由
const checkAuth = (routers: any, path: String) => {
  for (const data of routers) {
    if (data.path === path) return data;
    if (data.children) {
      const res: any = checkAuth(data.children, path);
      if (res) return res;
    }
  }
  return null;
};

export const checkRouterAuth = (path: String) => {
  let auth = null;
  auth = checkAuth(routes, path);
  return auth;
};

const Routers = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default Routers;
