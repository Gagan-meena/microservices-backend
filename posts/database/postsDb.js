const mongoose = require("mongoose");

const connectDb = async (Posts) => {
  try {
    const uri = process.env.MONGODB_URI;

    //Connect to the MongoDB database
    const connect = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connect) {
      console.log("DB Connected", connect.connection.host);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
