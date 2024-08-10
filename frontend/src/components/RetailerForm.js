"use client"
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { SelectorIcon } from "./SelectorIcon";
import { animals } from "./data";
import { Input } from "@nextui-org/react";


const RetailerForm = () => {

  
  

  return (
    <>
      <div className=" mt-5 rounded-lg border bg-white p-6 shadow-md md:w-1/3">
        <form className=" mx-auto">
          <div className="mb-5">
            <div className="flex items-start mb-5">
              <Select
                label=" Retailer Details"
                placeholder="Select Retailer"
                labelPlacement="outside"
                className="max-w-xs"
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon />}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="flex gap-5">
            <div>Contact </div>
            <div>
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-3 h-3 border mx-2  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required=""
              />
              Same B Contact
            </div>
          </div>

          <div className="flex items-start mb-5 mt-5">
            <Input
              type="tel"
              label=""
              className="w-full"
              placeholder="Contact Number"
              labelPlacement="outside"
              //   startContent={
              //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              //   }
            />
          </div>

          <div className="flex gap-5">
            <div> Address </div>
            <div>
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-3 h-3 border mx-2  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required=""
              />
              Same B Address
            </div>
          </div>

          <div className="flex items-start mb-5 mt-5">
            <Input
              type="text"
              label=""
              className="w-full"
              placeholder="Line - 1"
              labelPlacement="outside"
            />
          </div>

          <div className="flex items-start mb-5 mt-5">
            <Input
              type="text"
              label=""
              className="w-full"
              placeholder="Line - 2"
              labelPlacement="outside"
            />
          </div>

          <div className="flex items-start mb-5 mt-5">
            <Input
              type="text"
              label=""
              className="w-full"
              placeholder="Line - 3"
              labelPlacement="outside"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default RetailerForm;
