import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import BidDialog from './BidDialog';
import CardComponent from './CardComponent';
import { getItems } from '../network/api';

export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bids, setBids] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();
        setItems(items);
        console.log('debug: ', items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleBidSubmit = (newBid) => {
    setBids((prevBids) => [newBid, ...prevBids]);
  };

  return (
    <Grid container spacing={2} mt={2}>
      {items.map((item) => (
        <Grid item xs={6} sm={3}>
          <CardComponent item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
