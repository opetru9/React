import { useState,useEffect } from "react";

const OrderData = () => {
    let [largeDisplay, setLargeDisplay] = useState(null)

    useEffect(() => {
      if (window.innerWidth > 900) {
        setLargeDisplay(true);
      } else {
        setLargeDisplay(false);
      }

      window.addEventListener("resize", () => {
      if (window.innerWidth > 900){
        setLargeDisplay(true);
      } else {
        setLargeDisplay(false);
      }})
      
    }, [largeDisplay]);

    return (
      <div className="order-data">
        {largeDisplay ? <FullContent /> : <FewContent />}
      </div>
    );
}

function FullContent(){
    return (
      <span>
        Comanda acum: 
        <b>
          <a href="tel:+37360011911"> +060011911</a> /
          <a href="tel:+37369184145"> +069184145</a>
        </b>
      </span>
    );
}
function FewContent(){
    return (
        <b>
          <a href="tel:+37360011911">+060011911</a> /
          <a href="tel:+37369184145">+069184145</a>
        </b>
    );
}
 
export default OrderData;