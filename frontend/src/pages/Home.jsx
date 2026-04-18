import { useEffect } from "react";

function Home() {

  useEffect(() => {
    console.log("Tracking started");
    fetch("http://localhost:8000/track", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
  },
  body:JSON.stringify({
    page:window.location.pathname,
    event:"page_view"
  })
  })
  .then(res => res.text())
  .then(data => console.log("Response:",data))
  .catch(err => console.error(err));
  }, []);

  return <h1>Home Page</h1>;
}

export default Home;