import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import PrivateRoute from "components/PrivateRoute";
import { AuthProvider } from "context/AuthContext";
import Document from "pages/Document";
import Toolbar from "components/Toolbar";
import Footer from "components/Footer";
import Main from "components/Main";
import { TodoProvider } from "context/TodoContext";

const Home = React.lazy(() => import("pages/Home"));
const Login = React.lazy(() => import("pages/Login"));
const Profile = React.lazy(() => import("pages/Profile"));
const Todos = React.lazy(() => import("pages/Todos"));

function App() {
  const renderRoutes = () => {
    return (
      <Switch>
        <PrivateRoute path="/todos">
          <TodoProvider>
            <Todos />
          </TodoProvider>
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route path="/document" component={Document} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Toolbar />
          <Main>
            <React.Suspense fallback={<p>Loading...</p>}>
              {renderRoutes()}
              <GlobalStyle />
            </React.Suspense>
          </Main>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
