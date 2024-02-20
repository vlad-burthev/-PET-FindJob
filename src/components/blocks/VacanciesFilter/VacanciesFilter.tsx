import type { FC } from "react";
import styles from "./vacanciesFilter.module.scss";
import CountriesList from "../../ui/CountriesList/CountriesList";
import {
  setDatePosted,
  setEmployment,
  setWorkType,
} from "../../../store/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../store";

interface VacanciesFilterProps {}

const VacanciesFilter: FC<VacanciesFilterProps> = () => {
  const dispatch = useAppDispatch();
  const { employments, datePosted, workType } = useAppSelector(
    (state) => state.filters
  );
  const setEmploymentsHandler = (employmnetName: string) => {
    dispatch(setEmployment(employmnetName));
  };
  const selectPostedDateHandler = (date: string) => {
    dispatch(setDatePosted(date));
  };

  const selectWorkTypeHandler = (state: boolean) => {
    dispatch(setWorkType(state));
  };

  return (
    <div className={styles.filter}>
      <div className={`${styles["filter-type"]} ${styles["pub-date"]}`}>
        <h3>Publication date</h3>
        <ul>
          <li>
            <span
              onClick={() => selectPostedDateHandler("today")}
              className={datePosted === "today" ? styles.active : ""}
              tabIndex={0}
            >
              today
            </span>
          </li>
          <li>
            <span
              onClick={() => selectPostedDateHandler("3days")}
              className={datePosted === "3days" ? styles.active : ""}
              tabIndex={0}
            >
              3 days
            </span>
          </li>
          <li>
            <span
              onClick={() => selectPostedDateHandler("week")}
              className={datePosted === "week" ? styles.active : ""}
              tabIndex={0}
            >
              week
            </span>
          </li>
          <li>
            <span
              onClick={() => selectPostedDateHandler("month")}
              className={datePosted === "month" ? styles.active : ""}
              tabIndex={0}
            >
              month
            </span>
          </li>
        </ul>
      </div>

      <div className={`${styles["filter-type"]} ${styles["work-type"]}`}>
        <h3>Type of work</h3>
        <ul>
          <li
            className={workType ? styles.checked : ""}
            onClick={() => selectWorkTypeHandler(true)}
          >
            <input id="type-onlyRemote" type="radio" name="typeOfWork" />
            <label tabIndex={0} id="type-onlyRemote" htmlFor="type-onlyRemote">
              Remote
            </label>
          </li>
          <li
            className={!workType ? styles.checked : ""}
            onClick={() => selectWorkTypeHandler(false)}
          >
            <input id="type-any" type="radio" name="typeOfWork" />
            <label tabIndex={0} htmlFor="type-any">
              Any
            </label>
          </li>
        </ul>
      </div>

      <CountriesList clasName={styles["filter-type"]} />

      <div className={`${styles["filter-type"]} ${styles["employment"]}`}>
        <h3>Employment</h3>
        <ul className={styles["employment-list"]}>
          <li
            className={employments.includes("intern") ? styles.active : ""}
            onClick={() => setEmploymentsHandler("intern")}
            onKeyDown={(e) => {
              if (e.code === "Enter") setEmploymentsHandler("intern");
            }}
            tabIndex={0}
          >
            intern
          </li>
          <li
            className={employments.includes("contractor") ? styles.active : ""}
            onClick={() => setEmploymentsHandler("contractor")}
            onKeyDown={(e) => {
              if (e.code === "Enter") setEmploymentsHandler("contractor");
            }}
            tabIndex={0}
          >
            contractor
          </li>
          <li
            className={employments.includes("fulltime") ? styles.active : ""}
            onClick={() => setEmploymentsHandler("fulltime")}
            onKeyDown={(e) => {
              if (e.code === "Enter") setEmploymentsHandler("fulltime");
            }}
            tabIndex={0}
          >
            fulltime
          </li>
          <li
            className={employments.includes("parttime") ? styles.active : ""}
            onClick={() => setEmploymentsHandler("parttime")}
            onKeyDown={(e) => {
              if (e.code === "Enter") setEmploymentsHandler("parttime");
            }}
            tabIndex={0}
          >
            parttime
          </li>
          <li
            className={employments.includes("internship") ? styles.active : ""}
            onClick={() => setEmploymentsHandler("internship")}
            onKeyDown={(e) => {
              if (e.code === "Enter") setEmploymentsHandler("internship");
            }}
            tabIndex={0}
          >
            internship
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VacanciesFilter;
