import {
  createTheme,
  Box,
  Typography,
  Container,
  Link,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useParams } from "react-router-dom";
import rolleProducts from "../../../Products/Rolle";
import SlickSection from "../../../Components/SlickSection/SlikSection";
import tempuraProducts from "../../../Products/Tempura";
import seturiProducts from "../../../Products/Seturi";
import bauturiProducts from "../../../Products/Bauturi";
import "./onlyProduct.css";
import BackOnTop from "../../../Components/BackOnTop/BackOnTop";

const OnlyProduct = () => {
  const {category} = useParams()
  const {id} = useParams()
  let productCategory = [];

  if (category === "rolle") {
    productCategory = rolleProducts;
  } else if (category === "tempura") {
    productCategory = tempuraProducts;
  } else if (category === "seturi") {
    productCategory = seturiProducts;
  } else if (category === "bauturi"){
    productCategory = bauturiProducts;
  }

  const thisProduct = productCategory.find((product) => product.id == id);

  const onlyProductTheme = createTheme({
    palette: {
      primary: {
        main: "#eee",
      },
      mainDarkColor: "rgb(2, 16, 30)",
      mainLightColor: "#999",
      hoverColor: "#eee",
      redColor: "rgb(159, 75, 75)",
    },
    typography: {
      fontFamily: ["Merienda", "Raleway", "-apple-system", "sans-serif"].join(
        ","
      ),
      h3: {
        fontFamily: "Raleway",
        color: "#eee",
      },
      h5: {
        fontFamily: "Merienda",
        color: "rgb(159, 75, 75)",
      },
      body1: {
        fontFamily: "Raleway",
        color: "#999",
        marginLeft: "10px",
      },
      body2: {
        color: "#eee",
      },
    },
  });

// error page
  if (!thisProduct) {
    return (
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{ margin: "150px auto 50px auto", textAlign: "center" }}
        >
          Produsul nu a fost găsit
        </Typography>
      </Container>
    );
  }
// 

// main page
    return (
      <main className="onlyProduct__main">
        <ThemeProvider theme={onlyProductTheme}>
          <section>
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ marginBottom: "30px" }}
                  className={`${thisProduct.category}-gridItem`}
                >
                  <Box
                    component="img"
                    className={`${thisProduct.category}-img`}
                    src={thisProduct.img}
                    alt={thisProduct.name}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginBottom: "30px" }}>
                  <Grid
                    container
                    flexDirection={"column"}
                    sx={{ justifyContent: "space-between", height: "100%" }}
                    wrap="nowrap"
                    spacing={{ xs: 2, md: 0 }}
                  >
                    <Grid
                      item
                      sx={{
                        flexGrow: 0,
                        flexShrink: 1,
                        flexBasis: "10%",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "24px", sm: "30px", md: "40px" },
                        }}
                      >
                        {thisProduct.name}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        flexGrow: 0,
                        flexShrink: 1,
                        flexBasis: "10%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: { xs: "18px", sm: "24px", md: "30px" },
                        }}
                      >
                        {`${thisProduct.price} ${thisProduct.currency}`}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        flexGrow: 0,
                        flexShrink: 1,
                        flexBasis: "10%",
                      }}
                    >
                      <Typography variant="body2" component={"span"}>
                        Masa:
                      </Typography>
                      <Typography variant="body1" component={"span"}>
                        {thisProduct.weight}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      columns={4}
                      sx={{
                        flexGrow: 0,
                        flexShrink: 1,
                        flexBasis: "50%",
                      }}
                      className={`${thisProduct.category}-ingredients`}
                    >
                      <Typography variant="body2" component={"span"}>
                        {thisProduct.category === "seturi"
                          ? "Include:"
                          : "Ingrediente:"}
                      </Typography>

                      {thisProduct.category === "seturi" ? (
                        <Box sx={{ margin: "10px 0" }}>
                          {thisProduct.ingredients.map((item, index) => (
                            <Typography key={index} variant="body1">
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      ) : (
                        <Typography variant="body1" component={"span"}>
                          {thisProduct.ingredients}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" component={"span"}>
                        Categorie:{" "}
                      </Typography>
                      <Link
                        href={`/category=${thisProduct.category}`}
                        underline="none"
                        sx={{
                          color: onlyProductTheme.palette.redColor,
                          fontFamily: onlyProductTheme.typography.fontFamily,
                          textTransform: "uppercase",
                          transition: ".5s",
                          "&:hover": {
                            color: onlyProductTheme.palette.hoverColor,
                          },
                        }}
                      >
                        {" "}
                        {thisProduct.category}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <SlickSection
                name={"Produse Similare:"}
                products={productCategory}
                category={thisProduct.category}
              />
            </Container>
          </section>
        </ThemeProvider>
        <BackOnTop />
      </main>
    );
};

export default OnlyProduct;

