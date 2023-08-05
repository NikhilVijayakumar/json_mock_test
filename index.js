const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const server = jsonServer.create();

const middlewares = jsonServer.defaults();

// server.use(jsonServer.rewriter({
//   '/api/v1/*': '/$1', 
// }))
const router = jsonServer.router("db.json");

// Import the login handler
const { loginHandler } = require("./login");
server.use(middlewares);
server.use(bodyParser.json());
// Define the login route
server.post("/login", loginHandler);

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});
