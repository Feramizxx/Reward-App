const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Simulate a delay of 2 seconds for all requests
server.use((req, res, next) => {
  setTimeout(next, 1500);
});

server.use(middlewares);
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
