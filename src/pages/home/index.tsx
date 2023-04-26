import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "../Menu";

const Home = () => {
  
  return (
    <div style={{ height: '100%'}}>
      <LeftMenu>
        <main>
          {/* <h1>管理后台</h1> */}
          <Outlet />
        </main>
      </LeftMenu>

    </div>
  );
}
export default Home
