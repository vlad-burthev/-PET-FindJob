import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useGetTestQuery } from "./services/vacanciesAPI";
// import { useGetTestMutation } from "./services/vacanciesAPI";

const App = () => {
  // const [trigger, { data }] = useGetTestMutation();
  // useEffect(() => {
  //   trigger();
  // }, []);
  const { data } = useGetTestQuery("");
  console.log(data);

  return <AppRouter />;
};

export default App;
