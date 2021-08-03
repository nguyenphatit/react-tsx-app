import { useAuthContext } from "context/AuthContext";
import { useHistory, useLocation } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { login } = useAuthContext();
  const path: any = location.state || { from: { pathname: "/" } };

  const loginHandler = () => {
    login(() => history.replace(path.from));
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
