// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {

//     await queryInterface.bulkInsert('SavedUsers', [
//       {
//         recipeId: 1,
//         userId: 1,
//         isFavorite: true,
//         isSaved: false,
//       },
//       {
//         recipeId: 2,
//         userId: 1,
//         isFavorite: true,
//         isSaved: false,
//       },
//       {
//         recipeId: 7,
//         userId: 1,
//         isFavorite: true,
//         isSaved: true,
//       },
//       {
//         recipeId: 7,
//         userId: 2,
//         isFavorite: true,
//         isSaved: true,
//       },
//       {
//         recipeId: 8,
//         userId: 2,
//         isFavorite: true,
//         isSaved: true,
//       },
//       {
//         recipeId: 9,
//         userId: 2,
//         isFavorite: true,
//         isSaved: true,
//       },
//     ], {});

//   },

//   async down(queryInterface, Sequelize) {

//     await queryInterface.bulkDelete('SavedUsers', null, {});

//   }
// };
