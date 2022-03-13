import { useEffect, useState } from "react";
import "./styles.css";
import useFetch from "./useFetch.js";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    get("todos").then((val) => console.log(val));
    console.log("hita");
  });
  const { get } = useFetch("https://jsonplaceholder.typicode.com/");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
