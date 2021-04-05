import React,{useContext,createContext} from 'react';

const PortfolioContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
  }
  
const Context = ({children}) => {
    return (
        <PortfolioContext.Provider>
            {children}
        </PortfolioContext.Provider>
    )
}

export default Context
