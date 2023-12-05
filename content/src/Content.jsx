import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container, styled, Icon } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Button, CardActionArea, CardActions, Toolbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadUsersDetailsStart,
} from './redux/actions/usersDetailsActions';
const Content = () => {
  const CustomCard = styled(Card)(({ theme }) => ({
    margin: 0,
    padding: 0,
    borderRadius: '10px',
    height: '100%',
    transition: ' transform .5s, boxShadow 1s',
    '&:hover': {
      transform: 'scale(1.05) perspective(0px)',
      color: '#000000',
    },
  }));
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersDetails.data?.photos);
  useEffect(() => {
    dispatch(loadUsersDetailsStart());
  }, [])
  
  return (
    <>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography sx={{ fontSize: "40px", color: 'orange', textAlign: 'center', paddingBottom: '20px' }}>
          Data from Content-MFE,
        </Typography>
        <Typography sx={{ fontSize: '25px' }}>
        HDFC Bank Limited (also known as HDB) is an Indian banking and financial services company headquartered in Mumbai. It is India's largest private sector bank by assets and the world's fifth largest bank by market capitalisation as of August 2023, following its takeover of parent company HDFC.It is the third largest company on Indian stock exchanges with a market capitalisation of $150 billion (as of 6 September 2023).It is also the sixteenth largest employer in India with nearly 1.73lakh employees.
          </Typography>
        <Grid container spacing={4} justifyContent="center">
          {userData?.length > 0 && userData?.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CustomCard elevation={0}
                sx={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                   sx={{
                     maxWidth:'100%',
                     height:'auto',
                      }}
                    image={item.url}
                    alt="green iguana"
                  />
                </CardActionArea>
                <CardContent>
                  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={2}>
                    <Typography sx={{fontSize:'18px',color: 'blue', }}>
                      Followers {item.user}
                    </Typography>
                    <Typography variant="subtitle1"
                      sx={{ paddingTop: '15px', color: 'orange' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      sx={{ lineHeight: 1.6, padding: '0% 13%', paddingTop: '15px', }}
                    >
                      {item.description}
                      </Typography>
                  </Box>
                </CardContent>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
export default Content;