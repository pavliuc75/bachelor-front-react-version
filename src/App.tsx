import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Account from "./pages/Account";
import CreateAccount from "./pages/CreateAccount";
import PageNotFound from "./pages/PageNotFound";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import keycloak from "./authentication/keycloak";
import CLoadingOverlay from "./components/common/CLoadingOverlay";
import CSnackbar from "./components/common/CSnackbar";
import { useDispatch } from "react-redux";
import { tryCreateSocialUser } from "./store/userSlice";
import BusinessManagementTool from "./pages/BusinessManagementTool";
import BusinessManagementToolEditBusinessPage from "./pages/BusinessManagementToolEditBusinessPage";
import BusinessManagementToolProducts from "./pages/BusinessManagementToolProducts";
import BusinessManagementToolOrders from "./pages/BusinessManagementToolOrders";
import BusinessManagementToolOther from "./pages/BusinessManagementToolOther";

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
        <Route
          path="/business-management-tool"
          element={
            <RequireAuth>
              <BusinessManagementTool />
            </RequireAuth>
          }>
          <Route
            path="/business-management-tool/edit-business-page"
            element={<BusinessManagementToolEditBusinessPage />}></Route>
          <Route path="/business-management-tool/products" element={<BusinessManagementToolProducts />}></Route>
          <Route path="/business-management-tool/orders" element={<BusinessManagementToolOrders />}></Route>
          <Route path="/business-management-tool/other" element={<BusinessManagementToolOther />}></Route>
        </Route>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-[100vh] max-w-full relative" id="app-wrapper">
      <CLoadingOverlay></CLoadingOverlay>
      <CSnackbar></CSnackbar>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const dispatch = useDispatch();

  if (!keycloak.authenticated) {
    keycloak.login({
      // eslint-disable-next-line no-restricted-globals
      redirectUri: process.env.REACT_APP_URL + location.pathname,
    });
  } else {
    // @ts-ignore
    dispatch(tryCreateSocialUser());
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
export const routePathsRequiringLimitedNavigationBar = ["/create-account"];
