const express = require("express");
const router = express.Router();
const pool = require("../db/Pool");

// Get all sleep elements from the database
router.get("/", async (req, res) => {
  // Set cache-control header to disable caching (optional-advanced)
  res.setHeader("Cache-Control", "no-cache");
  try {
    const query = "SELECT * FROM sleep";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new sleep element to the database
router.post("/", async (req, res) => {
  try {
    const { start_time, end_time, user_id } = req.body;
    console.log(req.body, "reqbody")

    const query =
      "INSERT INTO sleep (start_time, end_time, user_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [start_time, end_time, user_id];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
    //bad request error edit 
  }
});

module.exports = router;

