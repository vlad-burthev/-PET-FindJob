import { useState, type FC, MouseEvent } from "react";
import { I_Vacancy } from "../../../interfaces/interface";
import styles from "./vacanciesCard.module.scss";
import LocationIcon from "./icon/location.svg?react";
import SalaryIcon from "./icon/salary.svg?react";
import TimeIcon from "./icon/time.svg?react";
import LikeIcon from "../../../assets/images/like.svg?react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { toggleFavorites } from "../../../store/favorites/faoritesSlices";

interface VacanciesCardProps {
  vacancy: I_Vacancy;
}

const VacanciesCard: FC<VacanciesCardProps> = ({ vacancy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, favoritesId } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const addToFaoritesHandler = (e: MouseEvent) => {
    dispatch(toggleFavorites(vacancy));
    e.stopPropagation();
  };

  console.log(favorites);

  return (
    <div onClick={() => setIsOpen((state) => !state)} className={styles.card}>
      <span
        onClick={addToFaoritesHandler}
        className={`${styles.like} ${
          favoritesId.includes(vacancy.id) ? styles.active : ""
        }`}
      >
        <LikeIcon />
      </span>
      <header className={styles.header}>
        <h2 className={styles.title}>{vacancy.title}</h2>
      </header>
      <div className={styles.content}>
        <div className={styles.company}>
          <h4>{vacancy.company}</h4>
          <img src={vacancy.image} alt={vacancy.company + " logo"} />
        </div>
        <div className={styles.info}>
          <span>
            <LocationIcon /> {vacancy.location}
          </span>
          <span>
            {vacancy.salaryRange && (
              <>
                <SalaryIcon /> {vacancy.salaryRange}
              </>
            )}
          </span>
          <span>
            <TimeIcon />
            {vacancy.datePosted}
          </span>
        </div>
        <div className={styles.links}>
          {vacancy.jobProviders.map(({ url, jobProvider }) => (
            <a target="_blank" key={url} href={url}>
              {jobProvider}
            </a>
          ))}
        </div>
        <div className={`${styles.description} ${isOpen ? styles.open : ""}`}>
          <div className={styles.employment}>{vacancy.employmentType}</div>
          <p>
            {isOpen
              ? vacancy.description
              : vacancy.description.slice(0, 200) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VacanciesCard;
