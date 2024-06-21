import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from './components-css/Form.module.css'

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
  }, [radioOptions]);

  const Price = () => {
    lastPrice.current = price;
  };

  //TODO: fix issue where i for some reason need to click on halfbody/fullbody options TWICE for it to go through 
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
        <label>halfbody $500USD</label>

        <input
          name="selectModelType"
          type="radio"
          value="fullbody"
          onChange={() => setRadioOptions("fullbody")}
        />

        <label>fullbody $700USD</label>


        <p>link your shared Google Drive/Dropbox</p>
        <input/>
        <p>additional add-ons:</p>
        
        <p>total</p>
        <p>
            please note: vtuber models are currently on .
            your commission may take longer than expected.        </p>
      
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
    <div className={styles.container}>
      <p>display name:</p>
      <input type="text" name="display" />


        <p>public twitter handle (@)</p>
        <input type="text" name="socmed" />


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
    </div>
  );
};

//when user does not select commission type from radio button yet, then dont show any options
//otherwise, when clicked radio button, then we must show the JSX

export default Form;
