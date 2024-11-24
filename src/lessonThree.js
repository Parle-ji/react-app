import React, { useState } from "react";

const LessonThree = () => {
  const [formData, setformData] = useState({
    userName: "",
    password: "",
    email: "",
    isVisible: false,
    textArea: "",
    mode: "",
    favCar: "",
  });
  // console.log(formData);

  // changeHandler
  function changeHandler(event) {
    const { value, name, checked, type } = event.target;
    setformData((preveData) => ({
      ...preveData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  // submit handler
  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <form className="text-center w-[90%] mx-auto" onSubmit={submitHandler}>
      <h1 className="text-xl">Learning form in react</h1>
      <br />
      <br />

      {/* input userName */}
      <label htmlFor="userName">
        name:{" "}
        <input
          onChange={changeHandler}
          type="text"
          name="userName"
          placeholder="userName"
          value={formData.userName}
        />
      </label>

      <br />
      <br />

      {/* input password  */}
      <label htmlFor="password">
        password :
        <input
          onChange={changeHandler}
          placeholder="password"
          type="password"
          name="password"
          value={formData.password}
        />
      </label>

      <br />
      <br />

      {/* input email */}
      <label htmlFor="email">
        email :{" "}
        <input
          onChange={changeHandler}
          placeholder="email"
          type="email"
          name="email"
          value={formData.email}
        />
      </label>

      <br />
      <br />

      {/* input text area */}
      <textarea
        onChange={changeHandler}
        name="textArea"
        value={formData.textArea}
        placeholder="please comment"
      ></textarea>

      <br />
      <br />

      {/* input type checkBox */}
      <label htmlFor="isVisible">
        are you sure:{" "}
        <input
          id="isVisible"
          onChange={changeHandler}
          type="checkbox"
          name="isVisible"
          checked={formData.isVisible}
        />
      </label>

      <br />
      <br />
      {/* fieldset ke sath  */}
      <fieldset className="border-2 border-gray-600 p-3 rounded-md">
        <legend>mode:</legend>

        {/* input radiio offline mode */}

        <label htmlFor="offLine-mode">
          {"offline mode  "}
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="offLine-mode"
            id="offLine-mode"
            checked={formData.mode === "offLine-mode"}
          />
        </label>

        <br />
        <br />

        {/* input radiio online mode */}
        <label htmlFor="onLine-mode">
          {"online mode  "}
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="onLine-mode"
            id="onLine-mode"
            checked={formData.mode === "onLine-mode"}
          />
        </label>
      </fieldset>

      <br />
      <br />

      {/* dropDown menu */}
      <label htmlFor="favCar">
        {" "}
        tell me your fav Car
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scorpio">scorpio</option>
          <option value="fartuner">fartuner</option>
          <option value="tharrr">tharrr</option>
          <option value="defender">defender</option>
          <option value="legender">legender</option>
        </select>
      </label>

      <br />
      <br />

      {/* submit button */}
      <input type="submit" value="submit" />
    </form>
  );
};

export default LessonThree;
