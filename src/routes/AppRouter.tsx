import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import VacanciesPage from "../pages/VacanciesPage/VacanciesPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import MyJobPage from "../pages/MyJobPage/MyJobPage";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<Layout />}>
        <Route path="vacancies" element={<VacanciesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="my-jobs" element={<MyJobPage />} />
      </Route>
      <Route path="*" element={"not found 404"} />
    </Routes>
  );
};

export default AppRouter;
