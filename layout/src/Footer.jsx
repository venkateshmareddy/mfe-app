import React from 'react';
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
const Footerlogo = "assets/img/footerImg.png";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const FooterLink = styled("span")(({ theme }) => ({
  color: "#fff",
  fontSize: "14px",
  fontWeight: '400',
  cursor: "pointer",
  "&:hover": {
    color: "0d0c22",
  },
}));

const Footer = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#3a3af1', position: "relative" }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <img style={{ height: '40px', padding: 4, }}
              src={Footerlogo}
              alt="React Logo" />
            <Typography sx={{ color: "#fff", maxWidth: '256px', margin: '20px 0px', lineHeight: '20px', fontSize: '14px', fontFamily: 'sans-serif' }}>HDFC is the world’s leading Bank for creatives to lend, borrow, and get hired.</Typography>
            <Stack direction="row" spacing={1.5} color='#fff'>
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <PinterestIcon />
            </Stack>
          </Box>
          <Box >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "bold",
                mb: 2,
                lineHeight: "20px",
              }}
            >
              About Us
            </Typography>
            <FooterLink>Investor Relations</FooterLink>
            <br />
            <FooterLink >Careers</FooterLink>
            <br />
            <FooterLink>Overview</FooterLink>
            <br />
            <FooterLink>News Room</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "bold",
                mb: 2,
                lineHeight: "20px",

              }}
            >
              Useful Links
            </Typography>

            <FooterLink >Penal Charges</FooterLink>
            <br />
            <FooterLink >Privacy</FooterLink>
            <br />
            <FooterLink >Qucik links</FooterLink>
            <br />
            <FooterLink >Sitemap</FooterLink>
            <br />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "bold",
                mb: 2,
                lineHeight: "20px",

              }}
            >
              Resources
            </Typography>

            <FooterLink >RBI</FooterLink>
            <br />
            <FooterLink >Way To Bank</FooterLink>
            <br />
            <FooterLink >Glossary</FooterLink>
            <br />
            <FooterLink >Rates</FooterLink>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "bold",
                mb: 2,
                lineHeight: "20px",

              }}
            >
              Calculators
            </Typography>

            <FooterLink >Home Loans</FooterLink>
            <br />
            <FooterLink >Personal Loans</FooterLink>
            <br />
            <FooterLink >Housing Loans</FooterLink>
            <br />
            <FooterLink >Car Loans</FooterLink>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "bold",
                mb: 2,
                lineHeight: "20px",

              }}
            >
             Need Help
            </Typography>

            <FooterLink >Customer Care</FooterLink>
            <br />
            <FooterLink >Insta Services</FooterLink>
            <br />
            <FooterLink >Contact Us</FooterLink>
            <br />
            <FooterLink >Locate Us</FooterLink>
            <br />
          </Box>
        </CustomContainer>
      </CustomContainer>
      <Divider mt={1} variant="fullWidth" sx={{ borderBottomWidth: 2,mt:5 }} color='#fff' />
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: 'center',
          paddingTop: '40px',
          color: "#fff",
          "&:hover": {
            color: "white",
          },
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        © Copyright HDFC Bank Ltd.
      </Typography>
    </Box>
  )
}

export default Footer;