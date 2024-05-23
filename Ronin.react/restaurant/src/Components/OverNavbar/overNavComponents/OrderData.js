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
    <div className="order-data">
      {largeDisplay ? <FullContent /> : <FewContent />}
    </div>
  );
};

function FullContent() {
  return (
    <span>
      Comanda acum:
      <b>
        <Link underline='none' href="tel:+37360011911"> +060011911</Link> /
        <Link underline='none' href="tel:+37369184145"> +069184145</Link>
      </b>
    </span>
  );
}
function FewContent() {
  return (
    <b>
      <Link underline='none' href="tel:+37360011911">+060011911</Link> /
      <Link underline='none' href="tel:+37369184145">+069184145</Link>
    </b>
  );
}

export default OrderData;
