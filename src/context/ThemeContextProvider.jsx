import {useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider=({children})=>{
 const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
 });
 const [isTransitioning, setIsTransitioning] = useState(false);

//  useEffect(() => {
//     // check for saved theme preference
//     const savedTheme = localStorage.getItem("theme");

//     if(savedTheme){
//         setTheme(savedTheme);
//     }
//  },[]);

 const toggleTheme=()=>{
   setIsTransitioning(true);

   setTimeout(()=>{
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
   },400);

   setTimeout(() => {
    setIsTransitioning(false);
   },1200);
 };

 return(
    <ThemeContext.Provider value={{theme, toggleTheme,isTransitioning}}>
        {children}
    </ThemeContext.Provider>
 )

}