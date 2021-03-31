exports.seed = function (knex) {
  console.log(process.env.NODE_ENV);
  return knex("recipes").truncate().insert({
    title: "moms ribs",
    author: "Grandma Rose",
    category_id: 1,
  });
};
