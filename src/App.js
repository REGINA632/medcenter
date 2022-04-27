import "./App.css";
import Toastify from "./Components/Tostify/Toastify";
import MoviesContextProvider from "./Contexts/MoviesContextProvider";
import MyRoutes from "./MyRoutes";
import CartContextProvider from "./Contexts/CartContextProvider";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import FavoriteContextProvider from "./Contexts/FavoriteContextProvider";
import ComContextProvider from "./Contexts/ComContextProvider";
import LikeContextProvider from "./Contexts/LikeContextProvider";
import RatingContextProvider from "./Contexts/RatingContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <RatingContextProvider>
        <LikeContextProvider>
          <ComContextProvider>
            <FavoriteContextProvider>
              <CartContextProvider>
                <MoviesContextProvider>
                  <Toastify />
                  <MyRoutes />
                </MoviesContextProvider>
              </CartContextProvider>
            </FavoriteContextProvider>
          </ComContextProvider>
        </LikeContextProvider>
      </RatingContextProvider>
    </AuthContextProvider>
  );
}

export default App;
