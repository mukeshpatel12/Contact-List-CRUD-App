const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/database");

class Contact extends Model {}

Contact.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "contacts",
    timestamps: false,
  }
);

module.exports = Contact;
