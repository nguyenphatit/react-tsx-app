import HelloForm from "components/HelloForm";
import { useAuthContext } from "context/AuthContext";
import { useHistory } from "react-router-dom";

interface Props {}

const ProtectedPage: React.FC<Props> = () => {
  let history = useHistory();
  const { logout } = useAuthContext();
  const logoutHandler = () => logout(() => history.push("/"));

  return (
    <>
      <h1>ProtectedPage</h1>
      <HelloForm />
      <hr />
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default ProtectedPage;
