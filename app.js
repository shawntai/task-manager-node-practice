const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRoutes");
const Task = require("./models/task");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", taskRouter);

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "TaskManagerApp",
	})
	.then(() => {
		app.listen(5001, (req, res) => {
			console.log("listening on port 5001");
		});
	})
	.catch((err) => {
		console.log("Failed to connect to MongoDB", err);
	});
