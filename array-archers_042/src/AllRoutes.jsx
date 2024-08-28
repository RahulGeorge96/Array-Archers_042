import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BikesPage from "./pages/BikesPage";
import JacketsPage from "./pages/JacketsPage";
import GlovesPage from "./pages/GlovesPage ";
import HelmetsPage from "./pages/HelmetsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SidebarNav from "./components/SidebarNav";
import { CartPage } from "./pages/CartPage";

const AllRoutes = () => {
  return (
    <Router>
      <SidebarNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/helmets" element={<HelmetsPage />} />
        <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/gloves" element={<GlovesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/products/:productName/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
