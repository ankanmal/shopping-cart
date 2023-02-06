import "./App.css";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
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
