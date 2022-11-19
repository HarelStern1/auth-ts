import { useState, useEffect } from "react";
import accessProtectedRoute from "../utils/api/accessProtectedRoute";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    const verifyAuthUser = async () => {
      const { isAuthenticated, user } = await accessProtectedRoute(accessToken);
      setAuthenticated(isAuthenticated);
      setUser(user.user);
    };
    verifyAuthUser();
  }, []);

  return {
    authenticated,
    user,
  };
};

export default useAuth;
