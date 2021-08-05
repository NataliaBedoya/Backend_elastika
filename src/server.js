const express = require("express");
const cors = require("cors");
const connect = require("./db");
const userRouter = require("./routes/user");

const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.listen(8000, () => console.log("App running at http://localhost:8000"));
