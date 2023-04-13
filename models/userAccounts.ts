import mongoose, { Document, ObjectId, Model } from "mongoose";
import Records from "./BrgyRecords";
import bcrypt from "bcrypt";
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

export interface IUser extends Document {
  username: string;
  password: string;
  verified: boolean;
  user_id: ObjectId;
}

export interface IUserModel extends Model<IUser> {
  login(username: string, password: string): Promise<IUser | null>;
  signup(): Promise<IUser | null>;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  user_id: {
    type: ObjectId,
    required: true,
  },
});

userSchema.statics.login = async function (
  username: string,
  password: string
): Promise<IUser | null> {
  if (!username || !password) {
    throw new Error("Please provide a username and password");
  }

  const user = await this.findOne({ username });
  if (!user) {
    throw new Error("Incorrect username");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }

  return user;
};

// userSchema.statics.signup = async function(firstName: string, middleName: string, lastName: string, username: string, password: string){

// }
