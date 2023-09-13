import { Schema, model } from 'mongoose';
const personSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please Provide a Name'],
    unique: true
  }
});
export default model('Person', personSchema);
