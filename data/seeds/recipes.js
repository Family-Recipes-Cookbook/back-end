exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        {
          recipe_name: "Steak",
          author: "Dan",
          category: "Dinner",
          time: "1.25hr",
          recipe_private: false,
          ingredients: "1. Steak \n 2. mashed potatoes \n 3. Gremolada",
          steps:
            "1. sear both sides for 30s \n 2. let rest for 10 minutes \n 3. slice not to thinly \n 4. add gremolada ",
        },
      ]);
    });
};

//recipes data
