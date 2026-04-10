import { useEffect } from "react";

function Home() {

  useEffect(() => {
    console.log("useEffect running");
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return <h1>Home Page</h1>;
}

export default Home;