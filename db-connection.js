import mongoose from "mongoose";

export default function connectToDB(uri) {
  mongoose.connect(uri);
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error.message)).once("open", () => {
    console.log("database connected👌");
  });
}
