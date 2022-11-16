'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Gordon",
          lastName: "Ramsay",
          email: "gordon@gmail.com",
          // password: bcrypt.hashSync("gordon", 10),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jamie",
          lastName: "Oliver",
          email: "jamie@gmail.com",
          // password: bcrypt.hashSync("jamie", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Julia",
          lastName: "Child",
          email: "julie@gmail.com",
          // password: bcrypt.hashSync("julia", 10),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Niki",
          lastName: "Nakayama",
          email: "niki@gmail.com",
          // password: bcrypt.hashSync("niki", 10),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
