import type { FC } from "react";
import VacanciesCard from "../../components/blocks/VacanciesCard/VacanciesCard";
import { useAppSelector } from "../../store";
import styles from "./myJobPageProps.module.scss";
import { Helmet } from "react-helmet-async";

interface MyJobPageProps {}

const MyJobPage: FC<MyJobPageProps> = () => {
  const { favorites } = useAppSelector((state) => state.favorites);

  return (
    <>
      <Helmet>
        <title>Vacancies - MyJobs page</title>
      </Helmet>
      <div className={styles.list}>
        {favorites.map((vacancy) => (
          <VacanciesCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </>
  );
};

export default MyJobPage;
