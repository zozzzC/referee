//this will allow the user in the backend to create a new commission form 
import {useDraggable} from '@dnd-kit/core';

const CommissionSection = () => {

    
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
                <select name="type">
                 <option value="combobox">combobox</option>
                 <option value="input-field">input field</option>
                 <option value="radio-button">radio button</option>
                 <option value="checkbox">checkbox</option>
                </select>
            </div>

            <div className={styles.subSection}>
                <p>add options:</p>
                <input></input>
            </div>


        </div>


        
        </>
     );
}
 
export default CommissionSection;