import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';


const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ADD8E6',
  backgroundImage: 'url("./bg.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '200px',
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    paddingLeft: '10px',
  },
}));

export default function MenuBar({ totalBids, searchTerm, setSearchTerm }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar sx={{ minHeight: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px' , margin: '60px 70px'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h4"
              color="inherit"
              noWrap
              component="div"
              sx={{ fontFamily: 'inherit' }}
            >
              Welcome to the Silent Auction
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              component="div"
              sx={{ fontFamily: 'inherit', marginTop: 2 }}
            >
              Total Bids: {totalBids}
            </Typography>
          </Box>
          <CustomTextField
            id="searchInput"
            variant="outlined"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            sx={{ width: '220px', height: '50%' }}
          />
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
}