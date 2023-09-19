require("dotenv").config();

const express = require("express");
const taskRoutes = require("./routes/tasks");
const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./routes/create_router.js");

// express app
const app = express();

// overriding CORS policy
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("task-list");
    const taskCollection = db.collection("tasks");
    const taskRoutes = createRouter(taskCollection);
    app.use("/api/tasks", taskRoutes);
  })
  .catch(console.err);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port ", process.env.PORT);
});
