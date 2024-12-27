"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      fullName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM("USER", "ADMIN"),
        defaultValue: "USER",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
