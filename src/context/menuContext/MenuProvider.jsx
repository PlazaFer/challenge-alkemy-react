import { useState } from 'react';
import { MenuContext } from './MenuContext';


export const MenuProvider = ({children}) => {

    const [ menu, setMenu ] = useState([]);

    return (
      <MenuContext.Provider
        value={{
          menu,
          setMenu,
        }}
      >
        {children}
      </MenuContext.Provider>
    );
}