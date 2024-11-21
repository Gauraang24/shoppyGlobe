# React E-Commerce Application

A modern e-commerce application built with **React**, **Ant Design**, and **React Router** to showcase products, product details, and a cart system with lazy-loaded routes for better performance.

---

## Features

- 📦 **Product Listing**: Displays a list of products fetched from a dummy JSON API.
- 🔍 **Product Details Page**: View details of a specific product.
- 🛒 **Cart Functionality**: Add and view products in the cart.
- 🚀 **Lazy Loading**: Optimized performance with React.lazy and Suspense.
- 🎉 **Toast Notifications**: Provides real-time feedback with `react-toastify`.
- 🎨 **UI Components**: Styled with Ant Design and Tailwind CSS for a sleek user experience.
- 🌐 **404 Page**: A user-friendly custom page for undefined routes.

---

## Tech Stack

- **Frontend**: React, React Router, Ant Design, Tailwind CSS
- **State Management**: Redux
- **Notifications**: react-toastify
- **Styling**: Tailwind CSS

---

## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/shoppyGlobe.git
   cd shoppyGlobe
   ```

2. **Install Dependencies**: npm install

3. **Start the development server**: npm start

4. **Open in your browser**: npm start

## Folder Structure

src/
├── Components/
│ ├── Layout.jsx
│ ├── PageNotFound.jsx
│ ├── CartItems.jsx
│ ├── Navbar.jsx
│ ├── ProductItems.jsx
├── Pages/
│ ├── Home.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│ ├── ProductList.jsx
├── Store/
│ ├── cartSlice.js
│ ├── store.jsx
├── utils/
│ ├── functions.js
│ ├── useFetch.jsx
├── App.js
├── index.js

## Performance Optimization

1. Implemented code splitting and lazy loading for components using React.lazy and Suspense.

2. Used Ant Design Spinner for a smooth fallback during lazy loading.

## Author

Gaurang More
Front-End Developer
Connect with me on LinkedIn : https://www.linkedin.com/in/moregaurang/
