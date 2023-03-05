import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Account from "./pages/Account";
import CreateAccount from "./pages/CreateAccount";
import PageNotFound from "./pages/PageNotFound";
import NavigationBar from "./components/navigation-bar/NavigationBar";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Base />} />
        <Route path="/account" element={<Account />} />
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

export default App;
