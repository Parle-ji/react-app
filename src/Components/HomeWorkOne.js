import React, { useState } from "react";

const HomeWorkOne = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    comments: true,
    candidates: true,
    offers: true,
    mode: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;

    if (type === "number") {
      setformData((prevData) => ({
        ...prevData,
        postalCode: value === "" ? "" : Number(value),
      }));
    } else if (type === "checkbox") {
      setformData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setformData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="w-full max-w-[1200px] bg-gray-200 mx-auto rounded-lg shadow-md p-8">
      <form
        onSubmit={submitHandler}
        className="flex flex-col space-y-6 w-full max-w-[600px] mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          User Information Form
        </h2>

        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            onChange={changeHandler}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            onChange={changeHandler}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            onChange={changeHandler}
            name="country"
            id="country"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="india">India</option>
            <option value="bhutan">Bhutan</option>
            <option value="nepal">Nepal</option>
            <option value="china">China</option>
          </select>
        </div>

        {/* Street Address */}
        <div>
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <input
            onChange={changeHandler}
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="Enter your street address"
            value={formData.streetAddress}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <select
            onChange={changeHandler}
            name="city"
            id="city"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="gorakhpur">Gorakhpur</option>
            <option value="kushinagar">Kushinagar</option>
            <option value="bihar">Bihar</option>
            <option value="mirjapur">Mirjapur</option>
          </select>
        </div>

        {/* Postal Code */}
        <div>
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip/Postal Code
          </label>
          <input
            type="number"
            name="postalCode"
            id="postalCode"
            placeholder="Enter your postal code"
            onChange={changeHandler}
            value={formData.postalCode}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Email Preferences */}
        <fieldset className="space-y-4">
          <legend className="text-base font-medium text-gray-700">
            By Email
          </legend>
          {["comments", "candidates", "offers"].map((item) => (
            <div key={item} className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={item}
                  name={item}
                  type="checkbox"
                  checked={formData[item]}
                  onChange={changeHandler}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={item} className="font-medium text-gray-700">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
                <p className="text-gray-500">
                  Get notified when a new {item} is posted.
                </p>
              </div>
            </div>
          ))}
        </fieldset>

        {/* Push Notifications */}
        <fieldset className="space-y-4">
          <legend className="text-base font-medium text-gray-700">
            Push Notifications
          </legend>
          {["everyThing", "sameasEmail", "nopushNotification"].map((option) => (
            <div key={option} className="flex items-center">
              <input
                id={option}
                name="mode"
                type="radio"
                value={option}
                checked={formData.mode === option}
                onChange={changeHandler}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor={option}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {option.replace(/([A-Z])/g, " $1").toLowerCase()}
              </label>
            </div>
          ))}
        </fieldset>
        <input
          type="submit"
          value="save"
          className="py-1 px-6 bg-black w-fit text-white rounded-full mx-auto"
        />
      </form>
    </div>
  );
};

export default HomeWorkOne;
