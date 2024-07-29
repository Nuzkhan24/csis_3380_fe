// src/components/CardComponent.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

const CardComponent = ({ item, handleOpenDialog }) => {

  return (
    <Card elevation={6} sx={{ maxWidth: 345, padding: '2%' }}>
      <CardMedia sx={{ height: 300 }} image={item.imgUrl} />
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>

      <Stack direction="column" alignItems="center" my={2}>
        <Typography variant="h5" color="blue">
          Current Bid: ${item.currentBid}
        </Typography>
        <Typography variant="h6" color="red">
          Time Left: {item.activeDays} days
        </Typography>
        <Button onClick={() => handleOpenDialog(item)} variant="contained">Bid</Button>
      </Stack>
    </Card>
  );
};

export default CardComponent;
