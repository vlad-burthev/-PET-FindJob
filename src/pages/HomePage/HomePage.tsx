import { useState, type FC } from "react";
import styles from "./homePage.module.scss";
import CountriesList from "../../components/ui/CountriesList/CountriesList";
import { useAppDispatch } from "../../store";
import { setJobTitle } from "../../store/filter/filterSlice";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [jobKeywords, setJobKeywords] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const findJobHandler = () => {
    if (jobKeywords.trim().length > 0) {
      dispatch(setJobTitle(jobKeywords));
    }
    navigate("/vacancies");
  };

  return (
    <>
      <Helmet>
        <title>Vacancies - Home page</title>
      </Helmet>
      <div className={styles.page}>
        <div>
          <h1>More than 1000 vacancies</h1>
        </div>
        <div>
          <div className={styles["btn-block"]}>
            <button onClick={findJobHandler}>Find Job</button>
          </div>
          <div className={styles["search-params"]}>
            <div className={styles["input-block"]}>
              <h3>Job`s keywords</h3>
              <input
                value={jobKeywords}
                onChange={(e) => setJobKeywords(e.target.value)}
                type="text"
                placeholder="Enter keywords, job title, company name or any other relevant search-query"
              />
            </div>
            <CountriesList clasName={""} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
