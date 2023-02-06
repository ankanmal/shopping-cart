import React from "react";

const products = [
  {
    name: "Product 1",
    price: 19.99,
    image: "/path/to/product1.jpg",
  },
  {
    name: "Product 2",
    price: 29.99,
    image: "/path/to/product2.jpg",
  },
  {
    name: "Product 3",
    price: 39.99,
    image: "/path/to/product3.jpg",
  },
  {
    name: "Product 4",
    price: 19.99,
    image: "/path/to/product1.jpg",
  },
  {
    name: "Product 5",
    price: 29.99,
    image: "/path/to/product2.jpg",
  },
  {
    name: "Product 6",
    price: 39.99,
    image: "/path/to/product3.jpg",
  },
];

function ProductListing() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.name}
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
            <p className="text-gray-600 text-base mt-1">${product.price}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
