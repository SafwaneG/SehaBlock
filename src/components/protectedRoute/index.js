import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "features/auth/selectors";
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = useSelector(authSelectors.token);

  useEffect(() => {
    if (!token ) navigate("/");
  }, [token, navigate]);

  return <>{children} </>;
}
