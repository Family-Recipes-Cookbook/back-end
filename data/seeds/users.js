exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          username: "admin",
          password: "1234",
          name: "admin",
          phone: "18008888",
          email: "mbok61@gmail.com",
          age: "19",
        },
        {
          username: "Dan",
          password: "1234",
          name: "Dan",
          phone: "18009999",
          email: "dan@backendisbrutal.com",
          age: "29",
        },
        {
          username: "tteam18",
          password: "1255",
          name: "tteam",
          phone: "18008899",
          email: "herewegoagain@me.com",
          age: "11",
        },
      ]);
    });
};
//comment here
