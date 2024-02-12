import AppRouter from "./routes/AppRouter";
import { useGetTestQuery } from "./services/vacanciesAPI";
// import { useGetTestMutation } from "./services/vacanciesAPI";

const App = () => {
  const { data } = useGetTestQuery("");
  console.log(data);

  return <AppRouter />;
};

export default App;
