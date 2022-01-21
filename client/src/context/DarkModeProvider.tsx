import React, {createContext, useState} from "react";

interface AppContextInterface {
    isDarkMode: boolean;
    setDarkMode: (val:boolean)=>void
}

// Initialize with default, junk value to assure type can never be null
export const DarkModeContext = createContext<AppContextInterface>({isDarkMode:false, setDarkMode: (val)=>{}});

const DarkModeProvider:React.FC = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);


    // @ts-ignore
    return (
        <DarkModeContext.Provider value={{ isDarkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;