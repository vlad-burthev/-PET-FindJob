import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        dasdas
      </Route>
      <Route path="*" element={"not found 404"} />
    </Routes>
  );
};

export default AppRouter;
