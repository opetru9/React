import { Link } from "@mui/material";
import { useState, useEffect } from "react";

const OrderData = () => {
  let [largeDisplay, setLargeDisplay] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setLargeDisplay(true);
    } else {
      setLargeDisplay(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setLargeDisplay(true);
      } else {
        setLargeDisplay(false);
      }
    });
  }, [largeDisplay]);



  return (
    <div>
      {largeDisplay ? <FullContent /> : <FewContent />}
    </div>
  );
};

function FullContent() {
  return (
    <span>
      Comanda acum:
      <Numbers/>
    </span>
  );
}
function FewContent() {
  return (
    <Numbers/>
  );
}

function Numbers(){
  return(
  <b>
    <Link underline='none' href="tel:+37360011911" sx={{
                    position:'relative',
                    zIndex:'100',
                    transition:'.5s',
                    color: "#111",
                    paddingLeft:'3px',
                    "&:hover": { color: "#eee" },
                  }}>
          +060011911
      </Link> /
      <Link underline='none' href="tel:+37369184145" sx={{
                    position:'relative',
                    zIndex:'100',
                    transition:'.5s',
                    color: "#111",
                    paddingLeft:'3px',
                    "&:hover": { color: "#eee" },
                  }}>
          +069184145
      </Link>
  </b>
  )
}

export default OrderData;
