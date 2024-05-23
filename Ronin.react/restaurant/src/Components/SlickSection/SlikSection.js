import SlickSlider from '../SlickSlider/SlickSlider';
import { Container, Divider,Typography,useTheme } from "@mui/material";
import './slickSection.css'


const SlickSection = ({name, products}) => {
  const theme = useTheme()
    return (
      <section className={`${name}-carousel section-carousel`}>
        <Container maxWidth='lg'>
          <Divider textAlign="left" sx={{ marginBottom:'35px' }}>
            <Typography variant="h5" sx={{fontFamily:'Merienda',textTransform:'uppercase',color: theme.palette.redColor}}>{name}</Typography>
          </Divider>

          <SlickSlider data={products} />
        </Container>
      </section>
    );
}
 
export default SlickSection;