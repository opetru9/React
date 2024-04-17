import { useEffect, useRef } from "react";
import useLocalStorage from "../../utils/useLocalStorage"; 
import systemLightMode from "../../utils/systemLightMode";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import './btnDarkMode.css'


const BtnDarkMode = () => {

    let [darkMode, setDarkMode] = useLocalStorage('darkMode', systemLightMode());

    const btnRef = useRef(null)

    const toggleDarkMode = () =>{
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    useEffect(()=>{

       if(darkMode === 'dark'){
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active')

        }else{
            document.body.classList.remove("dark");
            btnRef.current.classList.remove("dark-mode-btn--active");
        }

    },[darkMode])

    useEffect(() => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          const newColorScheme = event.matches ? "dark" : "light";
          setDarkMode(newColorScheme);
        });
    }, [setDarkMode]);

    return ( 

         <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
        
     );
}
 
export default BtnDarkMode;