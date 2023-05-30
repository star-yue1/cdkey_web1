import React from "react";
import Router from "@/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "antd/dist/reset.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <div className="App" style={{ height: "calc(100% - 60px)" }}>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
