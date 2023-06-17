const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.routes");
const { auth } = require("./middleware/Auth.Middleware");

const app = express();

app.use(express.json());
// app.use(cors());

app.use("/users", userRouter);

//auth middleware
app.use(auth);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to Data base..!");
  } catch (error) {
    console.log(error);
    console.log("Not able to connect Db!");
  }
  console.log(`Server is Runnig on Port ${process.env.port}`);
});
