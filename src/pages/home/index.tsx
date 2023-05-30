import React from "react";
import LeftMenu from "@/pages/Menu";
import Layout from "@/pages/Layout";
import RouterBeforeEach from "@/router/routerBeforeEach";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Layout>
        <LeftMenu>
          <main>
            {/* <h1>管理后台</h1> */}
            <RouterBeforeEach />
          </main>
        </LeftMenu>
      </Layout>
    </div>
  );
};
export default Home;
