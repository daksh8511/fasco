import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ConfirmWindow from "./Pages/ConfirmWindow/ConfirmWindow";
import ProductPage from "./Pages/ProductPage";
import Error from "./Pages/Error/Error";
import Cart from "./Pages/Cart/Cart";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/confirmwindow" element={<ConfirmWindow />} />
        <Route path="/product_page/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
