const express = require(express);
const { style } = require("../models/commission");
const { commissionType } = require("../models/commission");

const allTypes = { 
   
}

async function validation(type) {
  const { err, value } = await commissionType.validate(type);

  if (err) {
    throw new Error(error.details[0].message);
  }
  
  const styles = ["Anime", "Painterly", "Semirealism"];

  const find = styles.find((s) => s === type.style);

  if (find === null || find === undefined) {
    throw new Error(
      `The specified style ${type.style} is not a valid style.`
    );
  }

  return find;
}

async function checkDuplicateNameExists(type) {

}

async function createNewType(type) {
  try {
    //TODO: check if type and style were both specified

    const found = await validation(type);
    return type;

  } catch (err) {
    throw new Error(err.message);
  }
}

async function retrieveType(type) {
  try { 
    if (type.id === undefined) {
    return allTypes; 
  }
  const found = await validation(type.style);

  const exists = allTypes.find((t) => t.id === type.id);
  return exists;

  } catch (err) { 
    throw new Error(err.message);
  }
}

async function putType(type) { 
  //get the id from the type 
  try { 
    //TODO: this most likely does not work
    const found = await validation(type); 
    
    const typeIndex = types.find((t) => t.id === type.id); 
    const id = type.id;
    delete type['id'];

    types[typeIndex] = {id: id, ...type};

    return types[typeIndex];

  } catch(err) { 
    throw new Error(err.message);
  }
}

async function updateType(type) { 
  try { 
    const {id} = type;
    
    //after getting the id, find the index. 


     

  } catch (err) { 

  }
}