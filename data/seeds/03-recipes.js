// exports.seed = function (knex) {
//   return knex("recipes")
//     .truncate()
//     .then(function () {
//       return knex("recipes").insert([
//         {
//           recipe_id: 1,
//           recipe_name: "Steak",
//           author: "Dan",
//           category: "Dinner",
//           time: "1hr",
//           // ingredients: [
//           //   {
//           //     ingredient_id: 1,
//           //     ingredient_amount: "2 tsp",
//           //     ingredient_name: "butter",
//           //   },
//           //   {
//           //     ingredient_id: 2,
//           //     ingredient_amount: "2 tsp",
//           //     ingredient_name: "salt",
//           //   },
//           // ],
//           // steps: [
//           //   {
//           //     instruction_id: 1,
//           //     instruction_description: "mix 1 cup butter with 1tsp oil",
//           //     recipe_id: 1,
//           //   },
//           //   {
//           //     instruction_id: 2,
//           //     instruction_description: "preheat oven to 350",
//           //     recipe_id: 1,
//           //   },
//           // ],
//         },
//       ]);
//     });
// };

//recipes data
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_id: 1,
          title: "moms ribs",
          author: "Grandma Rose",
          category_id: 1,
        },
      ]);
    });
};
