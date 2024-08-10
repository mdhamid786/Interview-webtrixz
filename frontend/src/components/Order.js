"use client";
import React from "react";

import OrderForm from "./OrderForm";
import RetailerForm from "./RetailerForm";

const Order = () => {
  return (
    <>
      <div className="pt-2">
        <h1 className="text-xl font-bold mx-10">New Order</h1>
        <div className=" mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div  className="rounded-lg md:w-2/3 md:shadow-md mt-5 pt-5  ">
            {/* order form */}
            <OrderForm />
          </div>
          {/* retailer details form */}
          <RetailerForm />
        </div>
      </div>
    </>
  );
};

export default Order;
