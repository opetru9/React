import {Box,Link} from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState, useEffect } from "react";
import './backOnTop.css'

const BackOnTop = () => {

    let [isVisible, setIsVisible] = useState(false)
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    function backOnTopHandler(){
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    }

    return (
      <Box className={ isVisible ? "back-on-top active" :'' }>
        <Link onClick={backOnTopHandler}>
          <KeyboardArrowUpOutlinedIcon />
        </Link>
      </Box>
    );
}
 
export default BackOnTop;