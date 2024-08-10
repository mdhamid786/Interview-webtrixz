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

const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [product, setProduct] = useState("");
  const [product2, setProduct2] = useState("");
  const [product3, setProduct3] = useState("");

  const incremnt = (setCount, count) => {
    setCount(count + 1);
  };

  const decrement = (setCount, count) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Handler for form submission
  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    

  
    try {
      toast.dismiss();

      const apiData = JSON.stringify({
        product,
        quantity
    });

      // API call to save order data
      const data = await postApiData("order/add", apiData);

      if (data.success === true) {
        toast.success(data.message, {
          position: "bottom-center",
         
        });

        // Reset form fields
      
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


  const resetBtn = () =>{
    setProduct('')
    // setQuantity('')
  }

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

        <div className="flex">
          <div className="w-4/5">
            <div className="flex items-start mb-5">
              <Select
                label="Select Product"
                placeholder="Select Product"
                labelPlacement="outside"
                className="w-4/5 md:w-full"
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon />}
                value={product}
                onChange={(e)=>setProduct(e.target.value)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div className="flex items-start mb-5">
              <Select
                label="Select Product"
                placeholder="Select Product"
                labelPlacement="outside"
                className="w-4/5 md:w-full"
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon />}
                value={product2}
                onChange={setProduct2}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div className="flex items-start mb-5">
              <Select
                label="Select Product"
                placeholder="Select Product"
                labelPlacement="outside"
                className="w-4/5 md:w-full"
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon />}
                value={product3}
                onChange={setProduct3}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="md:w-1/5">
            <p style={{ textAlign: "center" }} className="ml-5">
              Units
            </p>

            <div className="flex items-start mb-5">
              <div className="flex items-center border-gray-100 mt-1 md:mx-5">
                <span
                  onClick={() => decrement(setQuantity, quantity)}
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={quantity}
                />
                <span
                  onClick={() => incremnt(setQuantity, quantity)}
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +{" "}
                </span>
              </div>
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center border-gray-100 mt-8 md:mx-5">
                <span
                  onClick={() => decrement(setCount2, count2)}
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={count2}
                />
                <span
                  onClick={() => incremnt(setCount2, count2)}
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +{" "}
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center border-gray-100 md:mx-5 mt-8">
                <span
                  onClick={() => decrement(setCount3, count3)}
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={count3}
                />
                <span
                  onClick={() => incremnt(setCount3, count3)}
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
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
        The selected products will be delivered to the shipping address within
        48 hours.
      </p>
      <Toaster />
    </>
  );
};

export default OrderForm;

