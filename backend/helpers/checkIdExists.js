const mongoose = require("mongoose");
const Joi = require("joi");

async function checkIfIdExists(findId, schema, schemaName) {
  //given the id and the schema do a mongoose search to see if that ID exists
  try {
    const tempUsers = [
      {
        id: "0",
        username: "me",
        email: "mail@mail.com",
        password: "hashhere",
      },
    ];
    const idExists = tempUsers.find((tempUser) => tempUser.id === findId);

    // schemaName = schemaName + "._id";
    // const idExists = await schema.findOne({ schemaName: id });

    if (idExists === undefined) {
      return false;
    }

    return true;
  } catch (err) {
    return err;
  }
}

const idExists = async (schema, schemaName, value, helpers) => {
  const exists = await checkIfIdExists(value, schema, schemaName);
  if (exists) {
    return value;
  } else {
    return helpers.message({
      external: `Referenced ID ${value} in ${schemaName} was not found.`,
    });
  }
};

module.exports = { idExists };
