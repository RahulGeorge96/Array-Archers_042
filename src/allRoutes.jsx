import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { LandingPage } from "./components/landingPage";
import BikesPage from "./pages/BikesPage";
import JacketsPage from "./pages/JacketsPage";
import GlovesPage from "./pages/GlovesPage ";
import HelmetsPage from "./pages/HelmetsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { CartPage } from "./pages/CartPage";
import { PrivateRoute } from "./privateroutes/loginprivate";
import { LoginPage } from "./components/loginPage";
import { SignupPage } from "./components/signupPage";
import PaymentForm from "./payment/payment";
import { AboutPage } from "./pages/AboutPage";

export const AllRoutes = () => {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bikes" element={<BikesPage />} />
          <Route path="/helmets" element={<HelmetsPage />} />
          <Route path="/jackets" element={<JacketsPage />} />
          <Route path="/gloves" element={<GlovesPage />} />
          <Route path="/cart" element={<PrivateRoute Component={CartPage} />} />
          <Route
            path="/products/:productName/:id"
            element={<ProductDetailsPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ChakraProvider>
    </>
  );
};
