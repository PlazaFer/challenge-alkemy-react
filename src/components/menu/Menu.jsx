import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../context/menuContext/MenuContext';
import { Card } from '../Card/Card';
import { Average } from './average/Average';
import { menuAverage } from '../../services/menuAverage';


export const Menu = () => {

  const { menu } = useContext(MenuContext)

  const [ average, setAverage ] = useState({});

   useEffect(() => {
      
    if(menu.length > 0){
    setAverage(menuAverage(menu));
    }
   }, [menu]);


    return (
      <div className="container h-100 w-100 mt-3">
        <div className="row d-flex justify-content-center align-items-center w-100">
          <h4 className="mb-3">Menu</h4>
          {menu.length > 0 && <Average average={average}/>}
          {menu.length === 0 ? (
            <h3 className="text-center mt-5">Your menu is empty add a dish</h3>
          ) : (
            menu.map((elMenu) => (
              <div
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                key={elMenu.id}
              >
                <Card result={elMenu} add={false} deleteDish={true} />
              </div>
            ))
          )}
        </div>
      </div>
    );
}