import OpenData from './overNavComponents/OpenData';
import OrderData from './overNavComponents/OrderData';
import { Link,Box,Container,Grid,useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const OverNavbar = () => {
  const theme = useTheme();
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.redColor,
          color: "#111",
          height: "30px",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              height: "30px",
            }}
          >
            <Grid item>
              <Link
                href="https://www.instagram.com/ronin_sushi_official/"
                rel="noopener noreferrer"
                target="_blank"
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <InstagramIcon
                  fontSize="medium"
                  sx={{
                    position: "relative",
                    zIndex: "100",
                    transition: ".5s",
                    color:'#222',
                    "&:hover": { color: "#eee" },
                  }}
                />
              </Link>
            </Grid>
            <Grid item>
              <OrderData />
            </Grid>
            <Grid item>
              <OpenData />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
}
 
export default OverNavbar;