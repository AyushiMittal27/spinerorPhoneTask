const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

const app = express();


dotenv.path({ "./config.config.env"});

//middleware 
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
  console.log('Server started on port 8000');
})