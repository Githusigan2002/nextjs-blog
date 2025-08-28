const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected!");
  } catch (error) {
    console.log("DB connection Error : ", error);
  }
};

export default connectdb;
