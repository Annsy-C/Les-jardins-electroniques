import React, { createContext, useState } from "react";

const CardContext = createContext({
    isOpen : false,
    toggleIsOpen : () => {},
})

const CardContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleIsOpen = () => setIsOpen(value => !value);
  
    return (
      <CardContext.Provider
        value={{
          isOpen,
          toggleIsOpen
        }}
      >
        {children}
      </CardContext.Provider>
    );
};

export default CardContext;
export { CardContext, CardContextProvider };
