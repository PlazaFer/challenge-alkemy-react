import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./context/authContext/AuthProvider";
import { MenuProvider } from "./context/menuContext/MenuProvider";
import { SearchProvider } from "./context/searchContext/SearchProvider";

import "./index.css";
import "./sass/custom.css";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {

  return (
    <AuthProvider>
      <MenuProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
