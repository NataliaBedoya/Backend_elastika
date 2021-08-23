require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//const connect = require("./db");

const userRouter = require("./routes/user");
const supplierRouter = require("./routes/supplier");
const customerRouter = require("./routes/customer");
const materialRouter = require("./routes/material");
const stockRouter = require("./routes/stock");
const commitRouter = require("./routes/commit");
const transitRouter = require("./routes/transit");

const { auth } = require("./utils/middlewares.js");

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(
  cors({
    //origin: process.env.FRONTEND_URL,
  })
);
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/supplier", supplierRouter);
app.use("/customer", customerRouter);
app.use("/material", materialRouter);
app.use("/stock", stockRouter);
app.use("/commit", commitRouter);
app.use("/transit", transitRouter);

app.get("/", auth, (req, res) => {
  res.status(200).json({ message: "estás autenticado" });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
