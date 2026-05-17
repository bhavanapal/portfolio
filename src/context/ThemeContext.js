import { createContext, useContext } from "react";
// create context
export const ThemeContext = createContext();

// consumer
export const useTheme=() =>{
 const contexts = useContext(ThemeContext);

 if(!contexts){
    throw new Error("useTheme must be used within a ThemeProvider");
 }

 return contexts
}





