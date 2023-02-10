import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQty, removeFromCart, removeQty } from "./slices/cartSlice";
import useCalculateTotal from "./utils/useCalculateTotal";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const totalAmt = useCalculateTotal();
  const formattedAmt = `${totalAmt.toFixed(2)}`;
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };
  const addQuantity = (id) => {
    dispatch(addQty(id));
  };
  const removeQuantity = (id) => {
    dispatch(removeQty(id));
  };

  return (
    <div className="flex flex-col  p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cartItems.map((e) => {
          return (
            <li
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
              key={e.id}
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={e.image}
                  alt={e.name}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {e.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{e.price}€</p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x mt-3">
                    <button
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => e.qty > 1 && removeQuantity(e.id)}
                    >
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 dark: fill-white"
                      >
                        <rect
                          x="10"
                          y="40"
                          width="80"
                          height="20"
                          fill="black"
                        />
                      </svg>
                    </button>
                    {cartItems.map((x) => {
                      if (x.id === e.id) {
                        return (
                          <span className="flex items-center px-2 py-1 space-x-1">
                            {x.qty}
                          </span>
                        );
                      }
                    })}
                    <button
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => addQuantity(e.id)}
                    >
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 dark: fill-white m-2"
                      >
                        <rect
                          x="10"
                          y="40"
                          width="80"
                          height="20"
                          fill="black"
                        />
                        <rect
                          x="40"
                          y="10"
                          width="20"
                          height="80"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex text-sm divide-x mt-4">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => removeItemFromCart(e.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> {formattedAmt} €</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md bg-yellow-400 border-yellow-400 dark:border-violet-400 dark:bg-violet-400 dark:text-gray-900"
        >
          Back
          <span className="sr-only sm:not-sr-only"> to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md bg-yellow-400 border-yellow-400 dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to </span> Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
