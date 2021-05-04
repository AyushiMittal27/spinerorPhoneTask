const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

const app = express();


dotenv.config({ path: "./config.config.env" });

//middleware 
app.use(cors());
app.use(express.json());


//connect to the database

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDb databse connected with host: ${con.connection.host}`
      );
    });
};
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server started on port 8000 ${process.env.PORT}`);
})

//handling unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to Unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});

//handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR : ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

