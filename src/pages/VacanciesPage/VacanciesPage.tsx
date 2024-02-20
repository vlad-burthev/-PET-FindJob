import { type FC } from "react";

import styles from "./vacanciesPage.module.scss";
import VacanciesList from "../../components/blocks/VacanciesList/VacanciesList";
import VacanciesFilter from "../../components/blocks/VacanciesFilter/VacanciesFilter";
import { Helmet } from "react-helmet-async";

interface VacanciesPageProps {}

const VacanciesPage: FC<VacanciesPageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Vacancies - Vacancies page</title>
      </Helmet>
      <div className={styles.vacancies}>
        <div className={styles.content}>
          <VacanciesList />
          <VacanciesFilter />
        </div>
      </div>
    </>
  );
};

export default VacanciesPage;
