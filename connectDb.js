import { connect } from 'mongoose';
const connectDB = async (uri) => {
  return await connect(uri);
};
export default connectDB;
