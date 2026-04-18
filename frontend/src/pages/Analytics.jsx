import { useEffect, useState } from "react";

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/analytics")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <p>Total Visits: {data.totalVisits}</p>
      <p>Unique Visitors: {data.uniqueVisitors}</p>
      <p>Most Visited Page: {data.mostVisitedPage}</p>
    </div>
  );
}

export default Analytics;