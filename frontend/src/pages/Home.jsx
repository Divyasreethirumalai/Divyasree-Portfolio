import { useEffect } from "react";

function Home() {

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return <h1>Home Page</h1>;
}

export default Home;