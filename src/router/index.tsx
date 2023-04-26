import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { router, IRouter } from './router';

const callbackRouter = (router: IRouter[]) => {
  return router.map(item => {
    const Component = item.component;
    return (
      item.router?.length ?
        <Route
          key={item.key}
          path={item.path}
          element={
            <React.Suspense
              fallback={<>路由加载中...</>}>
              <Component {...item} />
            </React.Suspense>
          }
        >
          {callbackRouter(item.router)}
        </Route> :
        <Route
          key={item.key}
          path={item.path}
          element={
            <React.Suspense
              fallback={<>路由加载中...</>}>
              <Component {...item} />
            </React.Suspense>
          }
        />
    )
  })
}

const Routers = () => (
  <BrowserRouter>
    <Routes>
      {callbackRouter(router)}
      <Route path="*" element={'404'} />
    </Routes>
  </BrowserRouter>

);

export default Routers;
