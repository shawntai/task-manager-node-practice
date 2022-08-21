const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongodb_username, mongodb_password } = require("./config");
const Task = require("./models/task");
const taskRouter = require("./routes/taskRoutes");
const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@cluster0.zfbgh.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: "TaskManagerApp",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", taskRouter);

app.listen(5001, (req, res) => {
	console.log("listening on port 5001");
});
