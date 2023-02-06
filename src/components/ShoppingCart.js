import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQty, removeFromCart, removeQty } from "./slices/cartSlice";
import useCalculateTotal from "./utils/useCalculateTotal";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const totalAmt = useCalculateTotal();
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
                        className="w-4 h-4 fill-current"
                      >
                        <rect
                          x="10"
                          y="40"
                          width="80"
                          height="20"
                          fill="white"
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
                        className="w-4 h-4 fill-current m-2"
                      >
                        <rect
                          x="10"
                          y="40"
                          width="80"
                          height="20"
                          fill="white"
                        />
                        <rect
                          x="40"
                          y="10"
                          width="20"
                          height="80"
                          fill="white"
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
                    {/*<button
                      type="button"
                      className=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
          </button>*/}
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
          <span className="font-semibold">{totalAmt} €</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
