import { useState } from "react";
async function getCommissionTypes(commSelect) { 
    //depending on the commission type selected, make a get request to the server to get the information about the commission type. 
    const data = await axios.get("");
}


export const SelectCommissionType = ({ comSelect }) => {

    //TODO: change radio options to be an array instead.

    const [radioOptions, setRadioOptions] = useState(null);

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
        <label>halfbody $450USD</label>

        <input
          name="selectModelType"
          type="radio"
          value="fullbody"
          onChange={() => setRadioOptions("fullbody")}
        />

        <label>fullbody $600USD</label>


        <p>link your shared Google Drive/Dropbox reference sheet and images:</p>
        <input/>

        <p>additional add-ons:</p>

        <input type="checkbox" /> item 1 

        <input type="checkbox" /> item 2 

        
        <p>total</p>

        <p>
            please note: vtuber models are currently on .
            your commission may take longer than expected.        
        </p>
      
        </>
      );
    } else if (comSelect === "illustration") {
      return <p>illustration</p>;
    } else if (comSelect === "skeb") {
      return <p>skeb</p>;
    }
  };