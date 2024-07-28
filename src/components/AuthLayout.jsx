//protected container
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({ children, authentication = false }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.authStatus);

  useEffect(() => {
    if (authentication && authentication !== auth.status) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoader(false);
  }, [navigate, authentication, authStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
