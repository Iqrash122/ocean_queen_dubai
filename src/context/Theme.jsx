import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export function Theme({children}){
    return(
        <ThemeContext.Provider value={"theme"}>{children}</ThemeContext.Provider>
    )
}



export const useTheme = ()=>{
    return useContext(ThemeContext);
}