import { useAuthContext } from "context/AuthContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

const Nav = styled.nav`
  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    li {
      margin-left: 20px;
      font-size: 1.2rem;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

const Toolbar: React.FC = () => {
  const history = useHistory();
  const { auth, logout } = useAuthContext();

  const goTo = (slug: string) => history.push(slug);

  const logoutHandler = () => logout(() => history.push("/"));

  return (
    <Header>
      <Brand>Toolbar</Brand>
      <Nav>
        <ul>
          <li onClick={() => goTo("/")}>Home</li>
          <li onClick={() => goTo("/todos")}>Todos</li>
          <li onClick={() => goTo("/profile")}>Profile</li>
          {!auth && <li onClick={() => goTo("/login")}>Login</li>}
          {auth && <li onClick={logoutHandler}>Logout</li>}
        </ul>
      </Nav>
    </Header>
  );
};

export default Toolbar;
