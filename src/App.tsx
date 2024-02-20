import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useAppDispatch } from "./store";
import { setFavorites } from "./store/favorites/faoritesSlices";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      const parsedFavorites = JSON.parse(favoritesFromStorage);
      if (Array.isArray(parsedFavorites)) {
        dispatch(setFavorites(parsedFavorites));
      }
    }
  }, []);

  return <AppRouter />;
};

export default App;
