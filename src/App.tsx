import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Cart from "./assets/cart/Cart";
import Layout from "./components/layout/Layout";
import Product from "./pages/poduct/Product";
import { IShoppingCartProvider } from "./context/ShopingCartContext";
import PrivateRoute from "./components/privatRoute/PrivateRoute";
import { Children } from "react";

function App() {
  return (
    <IShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element = {<Cart/>} />
          </Route>

        </Routes>
      </Layout>
    </IShoppingCartProvider>
  );
}

export default App;
