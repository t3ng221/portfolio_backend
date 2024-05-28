const AWS = require("aws-sdk");
const { dynamo } = require("../config/aws");

AWS.config.update(dynamo);

const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

exports.createAboutInfo = async (id, about) => {
  const params = {
    TableName: "about",
    Item: {
      id: id,
      about: about,
    },
  };

  try {
    await docClient.put(params).promise();
    console.log("About Info Added successfully:");
  } catch (err) {
    console.error("Error creating about info:", err);
    throw err;
  }
};

exports.getAbout = async (id) => {
  const params = {
    TableName: "about",
    Key: {
      id: id,
    },
  };

  try {
    const data = await docClient.get(params).promise();
    console.log("About Info:", data.Item);
    return data.Item;
  } catch (err) {
    console.error("Error getting about info:", err);
    throw err;
  }
};

exports.createExp = async (id, name, position, duration, description) => {
  const params = {
    TableName: "experience",
    Item: {
      id,
      name,
      position,
      duration,
      description,
    },
  };
  try {
    await docClient.put(params).promise();
    console.log("Experience Added successfully:", );
  } catch (err) {
    console.error("Error creating Experience", err);
    throw err;
  }
};

exports.getExp = async (id) => {
  const params = {
    TableName: "experience",
    Key: {
      id: id,
    },
  };

  try {
    const data = await docClient.get(params).promise();
    console.log("Experience Info:", data.Item);
    return data.Item;
  } catch (err) {
    console.error("Error getting about info:", err);
    throw err;
  }
};

exports.scanExps = async () => {
  const params = {
    TableName: "experience",
  };

  try {
    const data = await docClient.scan(params).promise();
    console.log("Experience Infos:", data.Items);
    return data.Items;
  } catch (err) {
    console.error("Error scanning experiences:", err);
    throw err;
  }
};

exports.createContact = async (id, name, email, message) => {
  const params = {
    TableName: "contact",
    Item: {
      id: id,
      name: name,
      email: email,
      message: message,
    },
  };

  try {
    await docClient.put(params).promise();
    console.log("Contact saved successfully");
  } catch (err) {
    console.error("Error saving contact:", err);
    throw err;
  }
};

