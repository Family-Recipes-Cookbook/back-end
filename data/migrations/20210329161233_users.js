exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username", 128).notNullable().unique().index();
    tbl.string("password", 256).notNullable();
    tbl.string("name", 128).notNullable();
    tbl.string("phone", 10).notNullable();
    tbl.string("email", 256).notNullable().unique();
    tbl.integer("age").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
