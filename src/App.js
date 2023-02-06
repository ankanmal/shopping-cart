import "./App.css";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default App;
