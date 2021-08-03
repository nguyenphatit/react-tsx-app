import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import PrivateRoute from "components/PrivateRoute";
import { AuthProvider } from "context/AuthContext";
import Document from "pages/Document";
const Home = React.lazy(() => import("pages/Home"));
const Login = React.lazy(() => import("pages/Login"));
const ProtectedPage = React.lazy(() => import("pages/ProtectedPage"));

function App() {
  const renderRoutes = () => {
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/protected-page">
            <ProtectedPage />
          </PrivateRoute>
          <Route path="/document" component={Document} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<p>Loading...</p>}>
          {renderRoutes()}
          <GlobalStyle />
        </React.Suspense>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
