const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  usrCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
