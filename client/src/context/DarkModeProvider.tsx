import React, {createContext, useState} from "react";

interface AppContextInterface {
    isDarkMode: boolean;
    setDarkMode: (val:boolean)=>void
}

// Initialize with default, junk value to assure type can never be null
export const DarkModeContext = createContext<AppContextInterface>({isDarkMode:false, setDarkMode: (val)=>{}});

const DarkModeProvider:React.FC = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(JSON.parse(localStorage.getItem('darkMode') ?? JSON.stringify(false) ));
    document.getElementById('dark-mode')?.setAttribute("href", isDarkMode ? 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css' : 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/flatly/bootstrap.min.css')

    // @ts-ignore
    return (
        <DarkModeContext.Provider value={{ isDarkMode, "setDarkMode":val=>{
                localStorage.setItem('darkMode', JSON.stringify(val))
                setDarkMode(val)
            }}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;