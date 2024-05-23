import OpenData from './overNavComponents/OpenData';
import OrderData from './overNavComponents/OrderData';
import { Link,Box,Container,Grid,useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import './overNavbar.css'

const OverNavbar = () => {
  const theme = useTheme();
    return (
      <Box sx={{ backgroundColor: theme.palette.redColor, color: "#111" ,height:'30px' }}>
        <Container maxWidth="lg" >
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center",height:'30px' }}
          >
          <Grid item>
            <Link
              href="##"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: '#eee' },
              }}
            >
              <InstagramIcon fontSize="medium" color="primary" />
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