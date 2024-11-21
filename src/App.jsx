import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { Spin } from 'antd';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import('./Pages/Home'));
const ProductDetails = React.lazy(() => import('./Pages/ProductDetails'));
const Cart = React.lazy(() => import('./Pages/Cart'));
const PageNotFound = React.lazy(() => import('./Components/PageNotFound'));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Spin size="large" tip="Loading..." />
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />

            {/* Catch all undefined routes */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Router>
  );
};

export default App;
