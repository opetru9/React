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
  } else if (category === "bauturi") {
    productCategory = bauturiProducts;
  }

  const thisProduct = productCategory.find((product) => product.id == id);
  console.log(id,category)

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
        fontFamily: "Merienda",
        color: "#eee",
      },
      h5: {
        fontFamily: "Raleway",
        color: "rgb(159, 75, 75)",
      },
      body1: {
        fontFamily: "Raleway",
        color:'#999',
        marginLeft:'10px'
      },
      body2: {
        color: "#eee",
      },
    },
  });

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

  return (
    <main className="onlyProduct__main">
      <ThemeProvider theme={onlyProductTheme}>
        <section>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} sx={{ marginBottom: "30px" }}>
                <Box
                  component="img"
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
                      flexBasis: "15%",
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
                      flexBasis: "25%",
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
                      flexBasis: "35%",
                    }}
                  >
                    <Typography variant="body2" component={"span"}>
                      Ingrediente:
                    </Typography>
                    <Typography variant="body1" component={"span"}>
                      {thisProduct.ingredients}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" component={"span"}>
                      Categorie:{" "}
                    </Typography>
                    <Link
                      href="##"
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
              
            />
          </Container>
        </section>
      </ThemeProvider>
    </main>
  );
};

export default OnlyProduct;

// 
// import {createTheme,Box,Typography,Container,Link, Grid, ThemeProvider} from "@mui/material";
// import rolleProducts from "../../../Products/Rolle";
// import SlickSection from "../../../Components/SlickSection/SlikSection";
// import tempuraProducts from "../../../Products/Tempura";
// import './onlyProduct.css'

// const OnlyProduct = () => {
//     const onlyProductTheme = createTheme({
//       palette: {
//         primary: {
//           main: "#eee",
//         },
//         mainDarkColor: "rgb(2, 16, 30)",
//         mainLightColor: "#999",
//         hoverColor: "#eee",
//         redColor: "rgb(159, 75, 75)",
//       },
//       typography: {
//         fontFamily: ["Merienda", "Raleway", "-apple-system", "sans-serif"].join(
//           ","
//         ),

//         h3: {
//           fontFamily: "Merienda",
//           color: "#eee",
//         },

//         h5: {
//           fontFamily: "Raleway",
//           color: "rgb(159, 75, 75)",
//         },

//         body1: {
//           fontFamily: "Raleway",
//         },
//         body2: {
//           color: "#eee",
//         },
//       },
//     });

//     const urlParams = new URLSearchParams(window.location.search);
//     const urlCategory = urlParams.get("category");
//     const urlId = urlParams.get("id");
//     let productCategory = null;

//     if(urlCategory === 'rolle'){
//         productCategory= rolleProducts
//     }else if(urlCategory === 'tempura'){
//         productCategory = tempuraProducts;
//     }

//     const thisProduct = productCategory.find(product => {
//        return product.id == urlId
//     })

//     console.log(urlId, urlCategory);
//     console.log(thisProduct, productCategory);

//     return (
//       <main className="onlyProduct__main">
//         <ThemeProvider theme={onlyProductTheme}>
//           <section>
//             <Container maxWidth="lg">
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6} sx={{ marginBottom: "30px" }}>
//                   <Box
//                     component="img"
//                     src={thisProduct.img}
//                     alt={thisProduct.name}
//                     sx={{
//                       width: "100%",
//                     }}
//                   ></Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} sx={{ marginBottom: "30px" }}>
//                   <Grid
//                     container
//                     flexDirection={"column"}
//                     sx={{ justifyContent: "space-between", height: "100%" }}
//                     wrap="nowrap"
//                     spacing={{ xs: 2, md: 0 }}
//                   >
//                     <Grid
//                       item
//                       sx={{
//                         flexGrow: 0,
//                         flexShrink: 1,
//                         flexBasis: "15%",
//                       }}
//                     >
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           fontSize: { xs: "24px", sm: "30px", md: "40px" },
//                         }}
//                       >
//                         {thisProduct.name}
//                       </Typography>
//                     </Grid>
//                     <Grid
//                       item
//                       sx={{
//                         flexGrow: 0,
//                         flexShrink: 1,
//                         flexBasis: "25%",
//                       }}
//                     >
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontSize: { xs: "18px", sm: "24px", md: "30px" },
//                         }}
//                       >
//                         {`${thisProduct.price + " " + thisProduct.currency}`}
//                       </Typography>
//                     </Grid>
//                     <Grid
//                       item
//                       sx={{
//                         flexGrow: 0,
//                         flexShrink: 1,
//                         flexBasis: "10%",
//                       }}
//                     >
//                       <Typography variant="body2" component={"span"}>
//                         Masa:
//                       </Typography>
//                       <Typography variant="body1" component={"span"}>
//                         {thisProduct.weight}
//                       </Typography>
//                     </Grid>
//                     <Grid
//                       item
//                       columns={4}
//                       sx={{
//                         flexGrow: 0,
//                         flexShrink: 1,
//                         flexBasis: "35%",
//                       }}
//                     >
//                       <Typography variant="body2" component={"span"}>
//                         Ingrediente:
//                       </Typography>
//                       <Typography variant="body1" component={"span"}>
//                         {thisProduct.ingredients}
//                       </Typography>
//                     </Grid>
//                     <Grid item>
//                       <Typography variant="body2" component={"span"}>
//                         Categorie:{" "}
//                       </Typography>
//                       <Link
//                         href="##"
//                         underline="none"
//                         sx={{
//                           color: onlyProductTheme.palette.redColor,
//                           fontFamily: onlyProductTheme.typography.fontFamily,
//                           textTransform: "uppercase",
//                           transition: ".5s",
//                           "&:hover": {
//                             color: onlyProductTheme.palette.hoverColor,
//                           },
//                         }}
//                       >
//                         {" "}
//                         {productCategory}
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <SlickSection
//                 name={"Produse Similare:"}
//                 products={productCategory}
//               />{" "}
//             </Container>
//           </section>
//         </ThemeProvider>
//       </main>
//     );
// }

// export default OnlyProduct;
