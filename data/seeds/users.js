exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          username: "admin",
          password: "1234",
          name: "admin",
          phone: "1-800-8888",
          email: "mbok61@gmail.com",
          age: "19",
        },
        {
          username: "Dan",
          password: "1234",
          name: "Dan",
          phone: "1-800-9999",
          email: "dan@backendisbrutal.com",
          age: "29",
        },
        {
          username: "tteam18",
          password: "1255",
          name: "tteam",
          phone: "1-800-8899",
          email: "herewegoagain@me.com",
          age: "11",
        },
      ]);
    });
};
//comment here
