import mongoose from "mongoose";

export const connectDb = async() => {
  await mongoose.connect('mongodb+srv://root:NVygBaBZHap5rTV5@cluster0.qbcaw.mongodb.net/full-stack-food-delivery').then(() => {
    console.log('db connected!');
  })
}