import { useEffect } from "react";
import { useNavigate } from "react-router";

const Redirect = ({ to, replace }: { to: string; replace: boolean }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  });

  return <div></div>;
};
export default Redirect