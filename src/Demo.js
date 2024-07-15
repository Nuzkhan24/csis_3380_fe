import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function MediaCard() {
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        //image="/static/images/jersey.jpg"
        image="./jersey.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
Igor Larionov Autographed Vancouver Canucks Jersey
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bid on this incredible adidas Vancouver Canucks pro jersey 
        that has been autographed by NHL legend - Igor Larionov. A must-have for the serious collector.</Typography>
      </CardContent>
      <h4 style={{ color: 'blue' }}>Current Bid: $379.00</h4>
      <h6  style={{ color: 'blue' }}>Time Left: 15 days</h6>
      <CardActions>
        <Button variant="contained" >Bid</Button>
      </CardActions>
    


<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        //image="/static/images/jersey.jpg"
        image="./jersey.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        Quinn Hughes Autographed Vancouver Canucks Official Game Puck
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bid on this outstanding Vancouver Canucks official game puck that has been autographed by NHL superstar - Quinn Hughes. A perfect addition for your collection.</Typography>
      </CardContent>
      <h4 style={{ color: 'blue' }}>Current Bid: $99.00</h4>
      <h6 style={{ color: 'blue' }}>Time Left: 15 days</h6>
      
      <CardActions>
        <Button variant="contained" >Bid</Button>
      </CardActions>
    </Card>
    </Card>
  );
}

