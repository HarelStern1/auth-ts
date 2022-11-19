import { FC } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashoard: FC = () => {
  const { authenticated, user } = useAuth();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  if (!authenticated) {
    return (
      <>
        <p>User is not authenticated.</p>
        <Link to="/login">Back to Login</Link>
      </>
    );
  }

  return (
    <div>
      <p>Welcome to your dashboard, {user?.name}</p>
      <Link to="/login" onClick={clearLocalStorage}>
        Log out
      </Link>
    </div>
  );
};

export default Dashoard;
