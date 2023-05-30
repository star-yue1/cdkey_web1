import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { checkRouterAuth } from "@/router";

// 路由守卫
const RouterBeforeEach = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let obj = checkRouterAuth(location.pathname);

    let blLogin = sessionStorage.getItem("login");

    console.log("登陆判断", obj, obj.auth, blLogin === "false");
    if (obj && obj.auth && (blLogin === "false" || !blLogin)) {
      setAuth(false);
      navigate("/login", { replace: true });
    } else {
      setAuth(true);
    }
  }, []);
  return auth ? <Outlet /> : null;
};

export default RouterBeforeEach;
