//this will allow the user in the backend to create a new commission form 
import {useDraggable} from '@dnd-kit/core';
import styles from "./components-css/CommissionSection.module.css"
import { useState, useRef } from 'react';

//parentOptions (array of the added options from their parent component (if applicable))
const CommissionSection = ({ parentID, typeOfParent, parentOptions }) => {
   const [type, setType] = useState("input-field");
   const [options, setOptions] = useState([]);
   const [renderWhen, setRenderWhen] = useState(null);
   const inputRef = useRef();


    return ( 
        <>
        <div className={styles.section}>
        <h2>section name</h2>
        <input></input>
        </div>

        <div className={styles.sectionArea}>
            <div className={styles.subSection}>
                <p>title</p>
                <input></input>
            </div>

            <div className={styles.subSection}>
                <p>type</p>
                <select name="type" onChange={(e) => setType(e.target.value)}>
                 <option value="combobox">combobox</option>
                 <option value="input-field">input field</option>
                 <option value="radio-button">radio button</option>
                 <option value="checkbox">checkbox</option>
                </select>
            </div>

            <div className={styles.subSection}>
                <p>options:</p>
                <input ref={inputRef}>
                </input>
                <button onClick={() => {
                    setOptions( ...options, {name: inputRef.current.value});
                }}>add</button>

                {/* TODO: change using ul to a custom component so that the user can delete the option too. */}
                {/* TODO: fix options.map is not a function error (see https://react.dev/learn/updating-arrays-in-state)*/}
                
                { options ? <ul>
                    {options.map(o => (
                        <li>{o.name}</li>
                    ))}
                </ul> : undefined}
                

            </div>

            <div className={styles.subSection}>

            </div>

            <div className={styles.subSection}>
                <p>add subsection</p>
            </div>

        </div>
        
        </>
     );
}
 
export default CommissionSection;