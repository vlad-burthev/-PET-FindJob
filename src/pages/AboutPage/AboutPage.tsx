import type { FC } from "react";
import styles from "./aboutPage.module.scss";
import { Helmet } from "react-helmet-async";
interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Vacancies - About page</title>
      </Helmet>

      <div className={styles.page}>
        <h1>Information about project</h1>
        <p className={styles["sub-title"]}>
          This is a job search platform that makes it easy and convenient for
          people to find jobs that match their skills, experience, and
          interests.
        </p>
        <div className={styles["main-info"]}>
          <h2 className={styles.functionality}>Functionality:</h2>
          <ul className={styles["functionality-list"]}>
            <li>
              Easy Search: Users can search for jobs by keywords, location, job
              type, industry and other criteria.
            </li>
            <li>
              Filter: Users can filter search results by criteria such as
              salary, work experience, education and skills.
            </li>
            <li>
              Saving Jobs: Users can save interesting jobs to return to later.
            </li>
            <li>Messages: Users can communicate directly with employers.</li>
            <li>
              Resume: Users can upload their resume so employers can find it.
            </li>
          </ul>
        </div>
        <div>
          <h2>For This Project I Used:</h2>
          <ul>
            <li className={styles.link}>
              <a
                target="_blank"
                href="https://rapidapi.com/Pat92/api/jobs-api14/"
              >
                JobsAPI
              </a>
            </li>
            <li>React</li>
            <li>Redux</li>
            <li>RTK Query</li>
            <li>TypeScript</li>
            <li>SCSS</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
