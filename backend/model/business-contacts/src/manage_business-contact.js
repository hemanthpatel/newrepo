const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { customAlphabet } = require("nanoid");
const alphabet = "0123456789";
const idSize = 16;
const nanoid = customAlphabet(alphabet, idSize);
/**************************************************************
 * Main Handler
 **************************************************************/
exports.handler = async function (event, context, callback) {
  if (!event) throw new Error("Event not found");
  let response;
  console.log("Received event {}", JSON.stringify(event, 3));
  try {
    switch (event.field) {
      case "createBusinessContact":
        response = await createBusinessContact(event.body, event.identity);
        break;
      case "updateBusinessContact":
        response = await updateBusinessContact(event.body);
        break;
      case "deleteBusinessContact":
        response = await deleteBusinessContact(event.body);
        break;
    }
  } catch (e) {
    console.error("Error Occured", e);
  }
  return response;
};
/**************************************************************
 * Create BusinessContact
 **************************************************************/
createBusinessContact = async (body, identity) => {
  const id = nanoid();
  const userName = identity;
  body.input["id"] = id;
  body.input["ownerId"] = userName;
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: body.input,
  };

  try {
    // Create the businessContact
    await dynamodb.put(params).promise();

    return {
      ...body.input,
      message: "Item successfully Inserted",
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

/**************************************************************
 * Update BusinessContact
 **************************************************************/
updateBusinessContact = async (body) => {
  console.log(body);

  const { id } = body.input;
  const newBody = { ...body.input };
  delete newBody.id;

  let TestUpdateExpression = "";
  let ExpressionAttributeValues = {};
  let i = 0;

  for (let item in newBody) {
    if (i === 0) {
      TestUpdateExpression += `set ${item} = :new${item}, `;
      i++;
    } else TestUpdateExpression += `${item} = :new${item}, `;

    ExpressionAttributeValues[`:new${item}`] = newBody[item];
  }

  const UpdateExpression = TestUpdateExpression.slice(0, -2);

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id,
    },
    UpdateExpression,
    ExpressionAttributeValues,
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const res = await dynamodb.update(params).promise();
    console.log(res);
    return {
      id,
      ...res.Attributes,
    };
  } catch (err) {
    console.log("ERROR: ", err);
  }
};

/**************************************************************
 * Delete BusinessContact
 **************************************************************/
deleteBusinessContact = async (body) => {
  console.log(body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: body.input.id,
    },
  };

  try {
    await dynamodb.delete(params).promise();
    return {
      ...body.input,
      message: "Item successfully deleted",
    };
  } catch (err) {
    console.log("ERROR: ", err);
    throw err;
  }
};
