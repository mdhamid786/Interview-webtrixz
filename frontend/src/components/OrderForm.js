"use client";
import React, { useState } from "react";
import { DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { CalendarIcon } from "./CalendarIcon";
import { Select, SelectItem } from "@nextui-org/react";
import { SelectorIcon } from "./SelectorIcon";
import { animals } from "./data";
import toast, { Toaster } from "react-hot-toast";
import { postApiData } from "../../helper/common";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from "@nextui-org/react";

const OrderForm = () => {
  const [product, setproduct] = useState([""]);
  const [quantity, setquantity] = useState([1]);

  const handleAddProduct = () => {
    setproduct([...product, ""]);
    setquantity([...quantity, 1]);
  };

  const handleRemoveProduct = (index) => {
    setproduct(product.filter((_, i) => i !== index));
    setquantity(quantity.filter((_, i) => i !== index));
  };

  const handleProductChange = (index, value) => {
    const updatedproduct = [...product];
    updatedproduct[index] = value;
    setproduct(updatedproduct);
  };

  const handleQuantityChange = (index, value) => {
    const updatedquantity = [...quantity];
    updatedquantity[index] = Math.max(1, value); // Ensure quantity is at least 1
    setquantity(updatedquantity);
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    try {
      toast.dismiss();

      const apiData = JSON.stringify({
        product,
        quantity,
      });

      const data = await postApiData("order/add", apiData);
      if (data.success === true) {
        toast.success(data.message, {
          position: "bottom-center",
        });
      } else {
        toast.error(data.message, {
          position: "bottom-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while placing the order.", {
        position: "bottom-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const resetBtn = () => {
    setproduct([""]);
    setquantity([1]);
  };

  return (
    <>
      <form className="max-w-lg mx-auto" onSubmit={handleOrderSubmit}>
        <div className="mb-5 w-2/3">
          <DateInput
            label="Order Date"
            defaultValue={parseDate("2024-04-04")}
            placeholderValue={new CalendarDate(1995, 11, 6)}
            labelPlacement="outside"
            startContent={
              <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        {product.map((product, index) => (
          <div key={index} className="flex">
            <div className="w-full">
              <div className="flex items-start mt-2">
                <Select
                  label="Select Product"
                  placeholder="Select Product"
                  labelPlacement="outside"
                  className="w-4/5 md:w-full"
                  disableSelectorIconRotation
                  selectorIcon={<SelectorIcon />}
                  value={product}
                  onChange={(e) => handleProductChange(index, e.target.value)}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
                <div className="flex items-start ml-4 mt-6">
                  <div className="flex items-center border-gray-100 mt-1 md:mx-5">
                    <span
                      onClick={() => handleQuantityChange(index, quantity[index] - 1)}
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={quantity[index]}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                    <span
                      onClick={() => handleQuantityChange(index, quantity[index] + 1)}
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      +{" "}
                    </span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleRemoveProduct(index)}
                  className="ml-2 text-red-500 mt-7"
                >
                  <ClearIcon 
                  
                  />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="parent-container mt-5 mr-24 mb-5 mx-10 flex justify-center sm:block">
  <div className="flex justify-center">
    {/* <AddIcon
      onClick={handleAddProduct}
      style={{
        height: "30px",
        width: "30px",
        color: "black",
        border: "2px solid black",
        borderRadius: "50%",
        padding: "5px",
      }}
    /> */}
    <Button  onClick={handleAddProduct} size="sm">
       <AddIcon/> Add Product
      </Button> 
  </div>
</div>


        <div className="flex mt-44 gap-2">
          <button
            type="submit"
            className="text-white bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <button
            type="reset"
            onClick={resetBtn}
            className="text-black bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Reset
          </button>

          <button
            type="button"
            className="text-black bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        </div>
      </form>

      <p
        style={{ textAlign: "center" }}
        className="mt-5 justify-center text-center"
      >
        The selected product will be delivered to the shipping address within
        48 hours.
      </p>
      <Toaster />
    </>
  );
};

export default OrderForm;
