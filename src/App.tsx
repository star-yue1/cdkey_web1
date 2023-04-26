import React from "react";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import 'antd/dist/reset.css';
import Layout from "./pages/Layout";
// import LeftMenu from "./pages/Menu";

const queryClient = new QueryClient();

function App() {
  return (
    <Layout>
      {/* <LeftMenu> */}
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <div className="App" style={{ height: 'calc(100% - 60px)' }}>
            <Router />
          </div>
        </QueryClientProvider>
      {/* </LeftMenu> */}

    </Layout>

  );
}

export default App;
