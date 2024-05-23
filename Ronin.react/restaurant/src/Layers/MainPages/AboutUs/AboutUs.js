import { ThemeProvider,createTheme,Container, Grid, Typography, responsiveFontSizes } from "@mui/material";
import Slider from "react-slick";
import img1 from '../../../img/aboutUs/i1.jpg'
import img2 from '../../../img/aboutUs/i2.jpg'
import img3 from '../../../img/aboutUs/i3.jpg'
import img4 from '../../../img/aboutUs/i4.jpg'
import './aboutUs.css'

const AboutUS = () => {
    const aboutUsTheme = createTheme({
      palette: {
        primary: {
          main: "#fff",
        },
        mainDarkColor: "rgb(2, 16, 30)",
        mainLightColor: "#999",
        hoverColor: "#eee",
        redColor: "rgb(159, 75, 75)",
      },
      typography: {
        fontFamily: ["Raleway", "Merienda", "-apple-system", "sans-serif"].join(
          ","
        ),
        h3: {
          fontFamily: "Merienda",
        },
      },
    });
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <main>
        <section className="aboutUs-slider">
          <Container maxWidth="md" className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={img1} alt="img1" />
              </div>
              <div>
                <img src={img2} alt="img2" />
              </div>
              <div>
                <img src={img3} alt="img3" />
              </div>
              <div>
                <img src={img4} alt="img4" />
              </div>
            </Slider>
          </Container>
        </section>
        <ThemeProvider theme={aboutUsTheme}>
          <section className="description">
            <Container
              maxWidth="md"
              sx={{
                textAlign: "center",
                color: aboutUsTheme.palette.primary.main,
                letterSpacing: "1px",
              }}
              spacing={4}
            >
              <Grid container direction={"column"} spacing={4}>
                <Grid item>
                  <Typography
                    variant="h3"
                    sx={{ color: aboutUsTheme.palette.redColor,
                          fontSize:{xs:'28px', md:'40px'}
                     }}
                  >
                    Ronin Sushi Bar
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Bine ați venit la Ronin Sushi Bar, locul unde pasiunea
                    pentru sushi întâlnește perfecțiunea culinară! Cu un an de
                    experiență în arta pregătirii sushi-ului, ne mândrim cu
                    profesionalismul nostru și cu angajamentul nostru pentru
                    calitatea de top.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    La Ronin Sushi Bar, fiecare bucată de sushi este o operă de
                    artă culinară, preparată cu atenție de către bucătari
                    experimentați. Folosim doar cele mai proaspete ingrediente
                    pentru a vă oferi gustul autentic al Japoniei în fiecare
                    mușcătură.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Experimentați o combinație perfectă de tradiție și inovație
                    în fiecare platou de sushi servit la Ronin. Vă promitem o
                    experiență culinară memorabilă, unde calitatea și pasiunea
                    se regăsesc în fiecare detaliu.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{ color: aboutUsTheme.palette.redColor }}
                  >
                    Vă invităm să ne alăturați la Ronin Sushi Bar pentru o
                    călătorie culinară de neuitat!
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </section>
        </ThemeProvider>
      </main>
    );
}
 
export default AboutUS;