import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import styles from './components-css/Form.module.css'
import { SelectCommissionType } from "./SelectCommissionType";

//find a way to use axios to query backend and check which comms are available, then grey out
//the comms that are not available in 'select commission' radio button

const Form = () => {
  const [comSelect, setComSelect] = useState(null);
  const [contactSelect, setContactSelect] = useState(null);
  const [price, setPrice] = useState(null);
  const lastPrice = useRef(0);
  const vtuberModelStatus = "waitlist";

  // useEffect(() => {
  //   SelectCommissionType();
  //   SelectContactType();
  // }, [radioOptions]);

  const Price = () => {
    lastPrice.current = price;
  };

  //TODO: fix issue where i for some reason need to click on halfbody/fullbody options TWICE for it to go through
  //https://medium.com/@akashshukla_1715/preventing-unnecessary-rerendering-of-child-components-in-react-using-usecallback-and-react-memo-34f1423fe263
  //probably change to useMemo for select commission type, as the parent rerenders every time something in the child changes ? 


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

      <SelectCommissionType comSelect={comSelect}/>
    </div>
  );
};

//when user does not select commission type from radio button yet, then dont show any options
//otherwise, when clicked radio button, then we must show the JSX

export default Form;
