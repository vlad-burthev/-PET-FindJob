import { useState, type FC } from "react";
import useSliceCountries from "../../../hooks/useSliceCountries";
import styles from "./countriesList.module.scss";
import { useAppDispatch } from "../../../store";
import { setSelectedCountry } from "../../../store/filter/filterSlice";

interface CountriesListProps {
  clasName: string;
}

const CountriesList: FC<CountriesListProps> = ({ clasName }) => {
  const [countryName, setCountryName] = useState("");
  const countries = useSliceCountries(countryName);
  const dispatch = useAppDispatch();

  const selectCountryHandler = (countryName: string) => {
    dispatch(setSelectedCountry(countryName));
    setCountryName(countryName);
  };

  return (
    <div className={`${styles["countries-block"]} ${clasName}`}>
      <h3>Country</h3>
      <div className={styles["input-block"]}>
        <input
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          type="text"
        />
      </div>
      <ul className={styles.list}>
        {countries.map(({ name, flags }: any) => (
          <li
            tabIndex={0}
            onClick={() => selectCountryHandler(name.common)}
            key={name.common}
          >
            <img src={flags.svg} alt={flags.alt} /> <span>{name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
