require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");

// database connection
// connection();




// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };


// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
mongoose.connect(
    process.env.DB,
    // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log('Connected to MongoDB');
    }
  );


app.listen(port, console.log(`Listening on port ${port}...`));
