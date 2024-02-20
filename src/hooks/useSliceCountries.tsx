import { useState, useEffect } from "react";
import { useGetAllCountriesQuery } from "../services/countriesAPI";

const useSliceCountries = (countryName: string) => {
  const { data, isLoading } = useGetAllCountriesQuery("");
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

  useEffect(() => {
    if (!isLoading && Array.isArray(data) && countryName.length > 0) {
      const filteredArray = data.filter((data) =>
        data.name.common
          .trim()
          .toLowerCase()
          .includes(countryName.trim().toLowerCase())
      );
      setFilteredCountries(filteredArray.slice(0, 5));
    } else {
      setFilteredCountries([]);
    }
  }, [countryName, data, isLoading]);

  return filteredCountries;
};

export default useSliceCountries;
