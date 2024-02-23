import "./App.css";
import Example1 from "./challenges/1";
import { Test } from "./challenges/2";
type AppProps = {
  id: string;
};
function App(props: AppProps) {
  return (
    <>
      <Example1 />
      <Test />
    </>
  );
}

export default App;
