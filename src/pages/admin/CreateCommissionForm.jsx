//this will allow the user in the backend to create a new commission form 
import styles from "../styles/CreateCommissionForm.module.css"
import {useDraggable} from '@dnd-kit/core';
import CommissionSection from "../../components/CommissionSection";

const CreateCommissionForm = () => {


    return ( 
        <>
        <CommissionSection/>
        </>
     );
}
 
export default CreateCommissionForm;