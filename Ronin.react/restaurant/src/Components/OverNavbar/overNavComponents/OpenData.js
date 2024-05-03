import { useState, useEffect } from "react";

const OpenData = () => {
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
    <div className="open">
      {largeDisplay ? <FullContent /> : <FewContent />}
    </div>
  );
};

function FullContent() {
  return (
    <span>
      Suntem deschisi in fiecare zi! <b> 8:00 - 22:00 </b>
    </span>
  );
}
function FewContent() {
  return (
    <span>
      <b> 8:00 - 22:00 </b>
    </span>
  );
}

export default OpenData;
