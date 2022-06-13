import "./App.css";
import Toastify from "./Components/Tostify/Toastify";
import MoviesContextProvider from "./Contexts/MoviesContextProvider";
import MyRoutes from "./MyRoutes";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import ComContextProvider from "./Contexts/ComContextProvider";
import RepContextProvider from "./Contexts/RepContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <RepContextProvider>
        <ComContextProvider>
          <MoviesContextProvider>
            <Toastify />
            <MyRoutes />
          </MoviesContextProvider>
        </ComContextProvider>
      </RepContextProvider>
    </AuthContextProvider>
  );
}

export default App;
