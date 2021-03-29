exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          username: "admin",
          password: "1234",
          name: "admin",
          phone: "1-800-empire",
          email: "mbok61@gmail.com",
          age: "19",
        },
        {
          username: "matt",
          password: "1234",
          name: "matt",
          phone: "1-800-taylors",
          email: "matt.bokovitz1@gmail.com",
          age: "24",
        },
        {
          username: "bob",
          password: "1234",
          name: "bob",
          phone: "1-800-legions",
          email: "tug64730@temple.edu",
          age: "43",
        },
      ]);
    });
};
