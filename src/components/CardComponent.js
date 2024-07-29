// src/components/CardComponent.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Bidders List
        </AccordionSummary>
        <AccordionDetails>
          <p>Name: Amie
          Bid amount: 4500</p>
          <p>
          Name: Amie
          Bid amount: 4500</p>
          <p>
          Name: Amie
          Bid amount: 4500</p>
          Name: Amie
          Bid amount: 4500
        </AccordionDetails>
      </Accordion>

    </Card>
  );
};

export default CardComponent;
