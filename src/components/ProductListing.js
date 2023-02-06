import React from "react";
import { useDispatch } from "react-redux";
import { PRODUCTS } from "./config/config";
import { addToCart } from "./slices/cartSlice";

function ProductListing() {
  const products = PRODUCTS;
  const dispatch = useDispatch();
  const addItemsToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 gap-4 m-5 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-span-1 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold leading-tight text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 text-base mt-1">{product.price}€</p>
            <button
              className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              onClick={(e) => addItemsToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
