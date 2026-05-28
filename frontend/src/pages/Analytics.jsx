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

    </div>
  );
}

export default Analytics;