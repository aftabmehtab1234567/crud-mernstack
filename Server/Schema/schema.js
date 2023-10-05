import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const UserModel= mongoose.model("users 1", userSchema);
export default UserModel
