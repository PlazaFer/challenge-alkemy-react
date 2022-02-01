import { LogoutButton } from "./button/LogoutButton";
import { DishSearch } from "./dishsearch/DishSearch";



export const AppBar = () => {
    return (
      <nav className="navbar bg-light shadow-sm">
        <div className="container-fluid w-100 h-100 d-flex align-items-center justify-content-between">
          <h5>Restaurant Menu</h5>
          <div className="d-flex align-items-center">
            <DishSearch />
            <LogoutButton />
          </div>
        </div>
      </nav>
      // <div className='navbar'>
      // <div className="container-fluid">
      //   <div className="row w-100 d-flex justify-content-center align-items-center">
      //     <div className="col-12 col-md-6 mb-3 text-center">
      //         <h5>Restaurant Menu</h5>
      //     </div>
      //     <div className="col-10 col-md-5 mb-3">
      //         <DishSearch />
      //     </div>
      //     <div className="col-2 col-md-1 mb-3">
      //       <LogoutButton />
      //     </div>
      //   </div>
      // </div>
      // </div>
    );
};
