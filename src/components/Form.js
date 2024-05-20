import React from "react";
import { useState, useEffect, useRef } from "react";

//find a way to use axios to query backend and check which comms are available, then grey out
//the comms that are not available in 'select commission' radio button

const Form = () => {
  const [comSelect, setComSelect] = useState(null);
  const [contactSelect, setContactSelect] = useState(null);
  const [radioOptions, setRadioOptions] = useState(null);
  const [price, setPrice] = useState(null);
  const lastPrice = useRef(0);
  const vtuberModelStatus = "waitlist";

  useEffect(() => {
    SelectCommissionType();
    SelectContactType();
  }, []);

  const Price = () => {
    lastPrice.current = price;
  };

  const SelectCommissionType = () => {
    console.log(comSelect);
    if (comSelect === null) {
      return undefined;
    }
    if (comSelect === "vtuber") {
      return (
        <>
          <p>model type:</p>
          <input
            name="selectModelType"
            type="radio"
            value="halfbody"
            onChange={() => setRadioOptions("halfbody")}
          />
          halfbody $500USD
          <input
            name="selectModelType"
            type="radio"
            value="fullbody"
            onChange={() => setRadioOptions("fullbody")}
          />
          fullbody $700USD
          <p>
            upload your vtuber PDF file (or link your shared Google
            Drive/Dropbox)
          </p>
          <button>select file</button>
          <input>File Link:</input>
          <p>Additional add-ons:</p>
          <p>Total</p>
          <p>
            Please note: Vtuber models are currently on {vtuberModelStatus}.
            Your commission may take longer than expected. Please check my
            Trello for more information.
          </p>
        </>
      );
    } else if (comSelect === "illustration") {
      return <p>illustration</p>;
    } else if (comSelect === "skeb") {
      return <p>skeb</p>;
    }
  };

  const SelectContactType = () => {
    if (contactSelect === null) {
      return undefined;
    }
    if (contactSelect === "discord") {
      return (
        <>
          <p>discord ID:</p>
          <input></input>
        </>
      );
    } else {
      return undefined;
    }
  };

  return (
    <>
      <label>
        display name
        <input type="text" name="display" />
      </label>
      <label>
        public twitter handle (@)
        <input type="text" name="socmed" />
      </label>
      <p>where would you like me to contact you on?</p>
      <input
        name="selectContactType"
        type="radio"
        value="twitter"
        onChange={() => setContactSelect("twitter")}
      />
      twitter
      <input
        name="selectContactType"
        type="radio"
        value="discord"
        onChange={() => setContactSelect("discord")}
      />
      discord
      <SelectContactType />
      <p>select your type of commission</p>
      <input
        name="selectComType"
        type="radio"
        value="vtuber"
        onChange={() => setComSelect("vtuber")}
      />
      vtuber
      <input
        name="selectComType"
        type="radio"
        value="illustration"
        onChange={() => setComSelect("illustration")}
      />
      illustration
      <input
        name="selectComType"
        type="radio"
        value="skeb"
        onChange={() => setComSelect("skeb")}
      />
      skeb
      <SelectCommissionType />
    </>
  );
};

//when user does not select commission type from radio button yet, then dont show any options
//otherwise, when clicked radio button, then we must show the JSX

export default Form;
