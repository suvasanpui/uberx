import { createContext, useState } from 'react';

const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        fullname: {
            firstname: " ",
            lastname: " "
        },
        email: " ",
        password: " ",
        vechile: {
            color: " ",
            plate: " ",
            capacity: " ",
            vechileType: " "
        }
    });
    

    return (
        <CaptainDataContext.Provider value={{captain, setCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export { CaptainDataContext, CaptainContext };