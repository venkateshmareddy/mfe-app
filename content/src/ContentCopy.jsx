import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container, styled, Icon } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Button, CardActionArea, CardActions, Toolbar } from '@mui/material';
const ContentCopy = () => {
   
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
    const [getData, setGetData] = useState();

    useEffect(() => {
        fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=15", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setGetData(data.photos);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    console.log('getData', getData);

    return (
        <>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography sx={{ fontSize: '25px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {getData && getData?.map((item, index) => (
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
                                        image={item.url}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={2}>
                                        <Typography sx={{ fontSize: '18px', color: 'blue', }}>
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
export default ContentCopy;