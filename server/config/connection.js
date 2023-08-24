const mongoose = require("mongoose");
// const connectDB = async () => {
const conn = mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/googlebooks"
);
console.log(`DB connected ${mongoose.connection.host}`);
//   return conn.connection;
// };
module.exports = mongoose.connection;
