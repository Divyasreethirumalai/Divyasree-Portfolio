import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Analytics() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    fetch("http://localhost:8000/analytics-data")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setStats(data);
      });

  }, []);

  if (!stats) {
    return <h1>Loading...</h1>;
  }

  const chartData = stats.visitsPerDay;
  return (
    <div className="page">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Analytics Dashboard
      </motion.h1>

      <div className="analytics-grid">

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{ fontSize: "40px" }}>
            📈
          </div>

          <h2>{stats.totalVisits}</h2>

          <p>Total Visits</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{ fontSize: "40px" }}>
            👥
          </div>

          <h2>{stats.uniqueVisitors}</h2>

          <p>Unique Visitors</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{ fontSize: "40px" }}>
            🔥
          </div>

          <h2>{stats.mostVisited}</h2>

          <p>Most Visited Page</p>
        </motion.div>

      </div>

      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: "40px" }}
      >

      <h2>Visits Per Day</h2>

      <div style={{ marginTop: "20px", textAlign: "left" }}>

        {chartData.map((item, index) => (

          <div key={index}>
            <p>
              {item.day} - {item.visits} Visits
            </p>
            <div className="bar">
              <div style={{
                  width: `${item.visits * 10}px`
                }}></div>
            </div>

          </div>

        ))}

      </div>
    </motion.div>

    </div>
  );
}

export default Analytics;