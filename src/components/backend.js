const express = require('express');
const app = express();
const port = 3000;

// Mock data or database query to get the total bids
const getTotalBids = async () => {
  // Replace with your actual database query logic
  return 10; // Example: return 10 bids
};

app.get('/api/total-bids', async (req, res) => {
  try {
    const totalBids = await getTotalBids();
    res.json({ totalBids });
  } catch (error) {
    console.error('Error fetching total bids:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
