// const server = require("./api/server.js");

// const PORT = process.env.PORT || 8000;
// server.listen(PORT, () => {
//   console.log(`\n=== Server listening on port ${PORT} ===\n`);
// });
require("dotenv").config();

const server = require("./api/server");
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
