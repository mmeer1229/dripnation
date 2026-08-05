import { Routes, Route } from "react-router-dom";

import { CartProvider } from "@/lib/cart";
import { Layout } from "@/components/layout/layout";
import { HomePage } from "@/pages/home";
import { ShopPage } from "@/pages/shop";
import { CategoryPage } from "@/pages/category";
import { BrandsPage } from "@/pages/brands";
import { MysteryBoxPage } from "@/pages/mystery-box";
import { ProductPage } from "@/pages/product";
import { CartPage } from "@/pages/cart";
import { CheckoutPage } from "@/pages/checkout";
import { AboutPage } from "@/pages/about";
import { ContactPage } from "@/pages/contact";
import { NotFoundPage } from "@/pages/not-found";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/mystery-box" element={<MysteryBoxPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App
