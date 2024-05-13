import React from "react";
import { useState, useEffect } from "react";

//find a way to use axios to query backend and check which comms are available, then grey out
//the comms that are not available in 'select commission' radio button
const Form = () => {
  const [comSelect, setComSelect] = useState(null);

  useEffect(() => SelectCommissionType(), []);

  const SelectCommissionType = () => {
    console.log(comSelect);
    if (comSelect === null) {
      return undefined;
    }
    if (comSelect === "vtuber") {
      return <p>vtuber</p>;
    } else if (comSelect === "illustration") {
      return <p>illustration</p>;
    } else if (comSelect === "skeb") {
      return <p>skeb</p>;
    }
  };

  return (
    <>
      <label>
        display name
        <input type="text" name="display" />
      </label>
      <label>
        public social media @
        <input type="text" name="socmed" />
      </label>
      <p>where would you like me to contact you on?</p>
      <button onClick={() => setComSelect("vtuber")}>select vtuber</button>
      <button onClick={() => setComSelect("illustration")}>
        select illustration
      </button>
      <button onClick={() => setComSelect("skeb")}>select skeb</button>

      <SelectCommissionType />
    </>
  );
};

//when user does not select commission type from radio button yet, then dont show any options
//otherwise, when clicked radio button, then we must show the JSX

export default Form;
