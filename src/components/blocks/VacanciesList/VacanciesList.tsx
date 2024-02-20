import { useState, type FC } from "react";
import styles from "./vacanciesList.module.scss";
import VacanciesCard from "../VacanciesCard/VacanciesCard";
import { useGetVacanciesQuery } from "../../../services/vacanciesAPI";
import { useAppDispatch, useAppSelector } from "../../../store";
import { I_Vacancy } from "../../../interfaces/interface";
import { setJobTitle } from "../../../store/filter/filterSlice";
import { dummyData } from "./dummyData";

interface VacanciesListProps {}

const VacanciesList: FC<VacanciesListProps> = () => {
  const { datePosted, employments, workType, selectedCountry, jobTitle } =
    useAppSelector((state) => state.filters);
  const { data, isLoading, isFetching, isError } = useGetVacanciesQuery({
    datePosted,
    employments,
    workType,
    selectedCountry,
    jobTitle,
  });
  const dispatch = useAppDispatch();
  const [workName, setWorkName] = useState("");

  const searchWorkHandler = () => {
    if (workName.length > 0) {
      dispatch(setJobTitle(workName));
    }
  };

  return (
    <section>
      <div className={styles.header}>
        <h1>Search: {jobTitle}</h1>
        <div className={styles["input-block"]}>
          <input
            onChange={(e) => setWorkName(e.target.value)}
            placeholder="Enter keywords, job title, company name or any other relevant search-query"
            type="text"
          />
          <button onClick={searchWorkHandler}>search</button>
        </div>
      </div>
      <div className={styles.list}>
        {isError
          ? isLoading || isFetching
            ? "loading"
            : dummyData.jobs.length > 0
            ? dummyData.jobs.map((vacancy: I_Vacancy) => (
                <VacanciesCard key={vacancy.id} vacancy={vacancy} />
              ))
            : "nothing found"
          : isLoading || isFetching
          ? "loading"
          : data.jobs.length > 0
          ? data?.jobs.map((vacancy: I_Vacancy) => (
              <VacanciesCard key={vacancy.id} vacancy={vacancy} />
            ))
          : "nothing found"}
      </div>
    </section>
  );
};

export default VacanciesList;
