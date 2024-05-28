import {ThemeProvider,createTheme,Box,Typography,Container,Link, Grid} from "@mui/material";
import './category.css'
import BackOnTop from "../../../Components/BackOnTop/BackOnTop";

const Category = ( {products} ) => {
    const categoryTheme = createTheme({
      palette: {
        primary: {
          main: "#999",
        },
        mainDarkColor: "rgb(2, 16, 30)",
        mainLightColor: "#999",
        hoverColor: "#eee",
        redColor: "rgb(159, 75, 75)",
      },
      typography: {
        fontFamily: ["Merienda", "Raleway", "-apple-system", "sans-serif"].join(
          ","
        )},
    });
  return (
    <main>
        <ThemeProvider theme={categoryTheme}>
        <Container
          maxWidth="lg"
          sx={{
            fontFamily: "Merienda",
          }}
        >
          <Box className="title-container">
            <Typography
              variant="h4"
              className="section-title"
              sx={{ textTransform: "uppercase" }}
            >
              {products[0].category}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid
                item
                key={product.name}
                xs={6}
                md={4}
                className={`${product.category}_wraper`}
              >
                <Link
                  href={`/product/${product.category}/${product.id}`}
                  underline="none"
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                      }}
                      alt={product.name}
                      src={product.img}
                    />
                    <Typography variant="h5" sx={{ marginTop: "10px" }}>
                      {product.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: categoryTheme.palette.redColor }}
                    >
                      {product.price} {product.currency}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
    </ThemeProvider>
        <BackOnTop />
      </main>
  );
};

export default Category;
