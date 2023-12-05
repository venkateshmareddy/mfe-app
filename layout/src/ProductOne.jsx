import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container, styled, Icon } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Button, CardActionArea, CardActions, Toolbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
    loadProductDetailsStart,
} from './redux/actions/productDetailsActions';
const ProductOne = () => {

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
    // const [productData, setProductData] = useState();

    // useEffect(() => {
    //     fetch("https://api.slingacademy.com/v1/sample-data/products?offset=5&limit=15", {
    //         method: "GET",
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProductData(data.products);
    //             // console.log(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    const dispatch = useDispatch();
    const productData = useSelector((state) => state.productDetails.data?.products);
    useEffect(() => {
        dispatch(loadProductDetailsStart());
    }, [])
    console.log('productData', productData);

    return (
        <>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Grid container spacing={4} justifyContent="center">
                    {productData && productData?.map((item, index) => (
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
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                        image={item.photo_url}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={2}>
                                        <Typography sx={{ fontSize: '18px', color: 'blue', }}>
                                            Price {item.price}
                                        </Typography>
                                        <Typography variant="subtitle1"
                                            sx={{ paddingTop: '15px', color: 'orange' }}
                                        >
                                            {item.category}
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
export default ProductOne;