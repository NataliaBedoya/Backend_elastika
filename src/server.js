require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./db");
//const { verify } = require("./utils/mailer");

const userRouter = require("./routes/user");
const supplierRouter = require("./routes/supplier");
const materialRouter = require("./routes/material");
// const stockRouter = require("./routes/stock");

const { auth } = require("./utils/middlewares.js");

const port = process.env.PORT || 8000;
const app = express();
connect();
//verify();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/supplier", supplierRouter);
app.use("/material", materialRouter);
// app.use("/stock", stockRouter);

app.get("/", auth, (req, res) => {
  res.status(200).json({ message: "estás autenticado" });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
