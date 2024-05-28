import {useState, useEffect} from "react";
import {useTheme, AppBar,Box,Toolbar,IconButton,Typography,Container,Link,Drawer,List} from "@mui/material";
import MenuIcon  from "@mui/icons-material/Menu";
import "./navbar.css"
const pages = ['rolle','tempura','seturi','bauturi','despre-noi']
const symbols = ['𪜨','𪜢','𪜸','𪜺','𪜻']


const Navbar = () => {
  const theme = useTheme();
  
  let [onTop, setOnTop] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scroll = document.documentElement.scrollTop;

      if (scroll === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    });

  }, [onTop]);

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)} sx={{ width: 350 }}>
      <List >
        {pages.map((page, i) => (
          <li key={page}>
            <a href={`/category=${page}`} key={page} style={{ margin: 2, display: "block", fontFamily: "Merienda", textTransform:'uppercase' }}>
              {page}
            </a>
            <span> {symbols[i]}</span>
          </li>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      className={onTop ? "main-navbar ontop" : "main-navbar active"}
      sx={{
        backgroundColor: theme.palette.mainDarkColor,
        fontFamily: "Merienda",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Typography
              component={Link}
              href="/"
              className={onTop ? "logo " : "logo active"}
              sx={{ ml: { xs: "62px" } }}
            ></Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <ul>
              {pages.map((page) => (
                <li key={page}>
                  <Link
                    href={`/category=${page}`}
                    underline="none"
                    sx={{
                      m: 2,
                      display: "block",
                      color: { color: theme.palette.mainLightColor },
                      "&:hover": { color: theme.palette.hoverColor },
                      textTransform:'uppercase'
                    }}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* burger-menu */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", lg: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor="right"
            >
              {DrawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

