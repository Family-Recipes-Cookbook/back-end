exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("instructions")
      // .del()
      .then(function () {
        // Inserts seed entries
        return knex("instructions").insert([
          {
            instruction_description: "add 2 cups flour",
            recipe_id: 1,
          },
          {
            instruction_description: "add 10 cups bbq",
            recipe_id: 1,
          },
          {
            instruction_description: "sear on both sides",
            recipe_id: 1,
          },
        ]);
      })
  );
};
