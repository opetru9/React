import logoImg from '../../img/ronin_logo.jpg'
import {useTheme,Stack,Grid,Typography,Container,Link,List, ListItem,Divider} from "@mui/material";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

import './footer.css'

const Footer = () => {
  const theme = useTheme();
  return (
    <footer
      className="footer"
      style={{ background: theme.palette.mainDarkColor, fontFamily: "Raleway" }}
    >
      <Stack
        maxWidth={"lg"}
        spacing={4}
        sx={{ background: theme.palette.mainDarkColor, margin: "auto" }}
      >
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.871800326917!2d28.58916487490065!3d46.82652554152133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c987f0296a9535%3A0x5f6840db735f77d6!2sRonin%20Sushi!5e0!3m2!1sro!2s!4v1708004328623!5m2!1sro!2s"
            height={250}
            width={"100%"}
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={"Maps Iframe"}
          ></iframe>{" "}
        </Container>
        <Grid
          container
          padding={3}
          sx={{ color: theme.palette.mainLightColor }}
        >
          <Grid item xs={3} sx={{ display: { lg: "flex", xs: "none" } }}>
            <img src={logoImg} alt="ronin_logo" className="footer-logo-img" />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ color: theme.palette.redColor }}>
              Menu
            </Typography>
            <List>
              <ListItem>
                <Link href="##" underline="none">
                  Rolle
                </Link>
              </ListItem>
              <ListItem>
                <Link href="##" underline="none">
                  Tempura
                </Link>
              </ListItem>
              <ListItem>
                <Link href="##" underline="none">
                  Seturi
                </Link>
              </ListItem>
              <ListItem>
                <Link href="##" underline="none">
                  Salate
                </Link>
              </ListItem>
              <ListItem>
                <Link href="##" underline="none">
                  Bauturi
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ color: theme.palette.redColor }}>
              Detalii
            </Typography>
            <List>
              <ListItem>
                <Link href="##" underline="none">
                  Despre noi
                </Link>
              </ListItem>
              <ListItem>
                <Link href="##" underline="none">
                  Termeni & condiții
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ marginTop: { xs: 4, md: 0 } }}>
            <Typography variant="h5" sx={{ color: theme.palette.redColor }}>
              Contacte
            </Typography>
            <List>
              <ListItem>
                <LocalPhoneOutlinedIcon />
                <Link
                  href="tel:+37360011911"
                  underline="none"
                  sx={{ marginRight: 1 }}
                >
                  +060011911
                </Link>
                /
                <Link
                  href="tel:+37369184145"
                  underline="none"
                  sx={{ marginLeft: 1 }}
                >
                  +069184145
                </Link>
              </ListItem>
              <ListItem>
                <FmdGoodOutlinedIcon />
                <Typography variant="span">
                  Str. Mihalacea Hincu 125/A, Hincesti, MD-3400
                </Typography>
              </ListItem>
              <ListItem>
                <QueryBuilderOutlinedIcon />
                <Typography variant="span">Zilnic 8:00 - 22:00</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider
          flexItem
          variant="fullWidth"
          sx={{ borderColor: theme.palette.mainLightColor }}
        />
        <Grid
          container
          justifyContent="space-between"
          maxWidth="xl"
          sx={{ paddingX: 3 }}
        >
          <Grid item>
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                color: theme.palette.mainLightColor,
              }}
            >
              © 2024 Ronin Sushi Bar. Toate drepturile sunt rezervate.
            </Typography>
          </Grid>
          <Grid item>
            <Link href="##">
              <InstagramIcon fontSize="medium" sx={{ paddingBottom: "5px" }} />
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </footer>
  );
};

export default Footer;
