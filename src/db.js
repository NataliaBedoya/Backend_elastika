const mongoose = require("mongoose");

function connect() {
  const mongoURI = "mongodb://localhost:27017/elastika";

    /* process.env.MONGO_URI || */ 
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(mongoURI, options)
    .then(() => console.log("Connection established successfully"))
    .catch((err) => console.log("Something went wrong", err));
}

module.exports = connect;
