exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          category_id: 1,
          category_name: "dinner",
        },
      ]);
    });
};
