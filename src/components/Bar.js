import React, { useState, useEffect } from 'react';
import Bar from './Bar'; // Adjust the path as necessary
import axios from 'axios';

export default function App() {
  const [totalBids, setTotalBids] = useState(0);

  useEffect(() => {
    // Assuming you have a function to fetch the total number of bids
    fetchTotalBids().then(bids => setTotalBids(bids)).catch(error => console.error('Error fetching total bids:', error));
  }, []);

  const fetchTotalBids = async () => {
    // Replace with your actual logic to fetch the total bids
    try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/total-bids');
        return response.data.totalBids;
      } catch (error) {
        console.error('Error fetching total bids:', error);
        return 0; // Default to 0 in case of an error
      }
    //return 10; // Example: fetched 10 bids
  };

  return (
    <div>
      <Bar totalBids={totalBids} />
      {/* Other components */}
    </div>
  );
}
