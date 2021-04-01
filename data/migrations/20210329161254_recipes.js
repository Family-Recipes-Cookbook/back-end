exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();
      tbl.string("name", 128).notNullable();
      tbl.integer("phone", 30).notNullable();
      tbl.string("email", 256).notNullable().unique();
      tbl.integer("age").notNullable();
    })
    .createTable("categories", (tbl) => {
      tbl.increments("category_id");
      tbl.string("category_name", 128).notNullable().unique();
    })
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("title", 128).notNullable().unique();
      tbl.string("author", 128).notNullable();
      tbl.string("category", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_amount", 128).notNullable();
      tbl.string("ingredient_name", 128).notNullable();
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
    .dropTableIfExists("recipes")
    .dropTableIfExists("categories")
    .dropTableIfExists("users");
};
