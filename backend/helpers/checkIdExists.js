const mongoose = require("mongoose");

async function checkIfIdExists(id, schema, schemaName) {
  //given the id and the schema do a mongoose search to see if that ID exists
  schemaName = schemaName + "._id";

  const idExists = await schema.findOne({ schemaName: id });

  if (!idExists) {
    throw new Error("ID does not exist.");
  }
}

module.exports = checkIfIdExists;
