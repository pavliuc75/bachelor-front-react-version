import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Account from "./pages/Account";
import CreateAccount from "./pages/CreateAccount";
import PageNotFound from "./pages/PageNotFound";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import keycloak from "./authentication/keycloak";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Base />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-[100vh] max-w-full relative">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  console.log(keycloak);
  if (!keycloak.authenticated) {
    keycloak.login({
      // eslint-disable-next-line no-restricted-globals
      redirectUri: process.env.REACT_APP_URL + location.pathname,
    });
  } else {
    keycloak
      .updateToken(3000)
      .then(() => {
        return children;
      })
      .catch(() => {
        keycloak.login({
          // eslint-disable-next-line no-restricted-globals
          redirectUri: process.env.REACT_APP_URL + location.pathname,
        });
      });
  }

  return children;
}

export default App;
