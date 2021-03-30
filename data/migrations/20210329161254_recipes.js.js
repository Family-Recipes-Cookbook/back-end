// exports.up = function (knex) {
//   return knex.schema
//     .createTable("recipes", (table) => {
//       table.increments("recipe_id");
//       table.string("recipe_name", 128).notNullable();
//       table.string("author", 128).notNullable();
//       table.string("category", 128).notNullable();
//       table.string("time", 128).notNullable();
//       table.string("ingredients").notNullable();
//       table.string("steps").notNullable();
//     })
//     .createTable("ingredients", (table) => {
//       table.increments("ingredient_id");
//       table.string("Ingredient_name");
//     })
//     .createTable("steps", (table) => {
//       table.increments("step_id");
//       table.string("step_name");
//       table.integer("step_order");
//     })
//     .createTable("recipe_ingredients", (table) => {
//       table.increments("recipe_ingredient_id");
//       table.integer("recipe_id").references("recipe_id").inTable("recipes");
//       table
//         .integer("ingredient_id")
//         .references("ingredient_id")
//         .inTable("ingredients");
//       table.integer("ingredient_quantity").defaultTo(0);
//       table.integer("unit_id").references("unit_id").inTable("units");
//       table.integer("unit_quantity").defaultTo(0);
//     })
//     .createTable("step_ingredients", (table) => {
//       table.increments("ingredient_id");
//       table.string("ingredient_quantity");
//     });
// };

// exports.down = function (knex) {
//   return knex.schema.dropTableIfExists("recipes");
// };

exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("title", 128).notNullable().unique();
      tbl.string("author", 128).notNullable();
      tbl
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("category_id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("categories", (tbl) => {
      tbl.increments("category_id");
      tbl.string("category_name", 128).notNullable().unique();
      // tbl.integer("recipe_id").references("recipe_id").inTable("recipes");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_amount", 128).notNullable();
      tbl.string("ingredient_name", 128).notNullable().unique();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("instructions", (tbl) => {
      tbl.increments("instruction_id");
      tbl.text("instruction_description").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("categories")
    .dropTableIfExists("recipes");
};
