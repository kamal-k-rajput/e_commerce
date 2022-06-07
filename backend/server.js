const app = require("./app");
const connect = require("./config/db");
app.listen(5500, () => {
  console.log("listining on the port 5500");
  connect();
  console.log("data base connection established");
});
