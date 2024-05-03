import { useState } from "react";
import Header from "../components/header";
export default function About() {
  const [sticky, setSticky] = useState(0);
  // const clickHandle = () => setSticky(sticky + 1);
  // function clickHandle() {
  //   setSticky(sticky + 1)
  // }

  // console.log('Hello, my name is monirul')

  return (
    <>
      <Header />
      <h1>About Page {sticky}</h1>
      <button onClick={(e) => setSticky(sticky + 1)}>Click Me</button>
    </>
  );
}
