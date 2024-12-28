"use strict";
const { values } = require("lodash");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        foreignKey: "userId",
        as: "Order",
        sourceKey: "id",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
      gender: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM("USER", "ADMIN"),
        defaultValue: "USER",
        validate: {
          isIn: [values(["USER", "ADMIN"])],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
