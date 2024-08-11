import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext"
import { ProductDetailProvider } from "./contexts/ProductDetailsContext"
import { CollectionsProvider } from "./contexts/CollectionsContext";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="overflow-hidden w-full box-border">
      <NavBar />
      <div className="max-w-screen-2xl lg:px-20 md:px-14 sm:px-10 px-5 m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <CollectionsProvider>
        <ProductDetailProvider>
          <ProductsProvider>
            <RouterProvider router={router} />
          </ProductsProvider>
        </ProductDetailProvider>
      </CollectionsProvider>
    </CartProvider>
  );
}

export default App;
