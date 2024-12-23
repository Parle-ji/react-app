import React from "react";

export const StoreCard = ({ product }) => {
  const subStr = `${product.title.substring(0, 17)}...`;
  const subDesc = `${product.description.substring(0, 80)}...`;
  const selectedProduct = false;
  return (
    <div
      className="w-[240px]  bg-white text-xs rounded-sm"
      key={product.id}
    >
      <div className="flex flex-col items-center  justify-between w-32 mx-auto">
        <p className="font-bold leading-3 my-2">{subStr}</p>
        <p>{subDesc}</p>
        <img src={product.image} className="object-contain aspect-square " />
      </div>
      <div className="flex justify-between items-center px-4 my-4">
        <p className="text-green-400 font-bold"> ${product.price}</p>
     
          <div>
            <button className=" px-4 bg-cyan-900 text-white rounded-full">
            {
                selectedProduct ? 'Remove Product':'Add Product'
            }
            </button>
          </div>

      </div>
    </div>
  );
};
