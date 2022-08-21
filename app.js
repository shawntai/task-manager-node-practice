const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongodb_username, mongodb_password } = require("./config");
const Task = require("./models/task");
const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@cluster0.zfbgh.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: "TaskManagerApp",
});
// .then((result) => console.log(result));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/tasks", (req, res) => {
	Task.find().then((result) => res.json({ success: true, result }));
});

app.get("/api/tasks/:id", (req, res) => {
	Task.findById(req.params.id)
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
});

app.post("/api/tasks", (req, res) => {
	const newTask = new Task(req.body);
	newTask.save().then((_) => res.send("POST request suceessful"));
});

app.put("/api/tasks/:id", (req, res) => {
	Task.findByIdAndUpdate(req.params.id, req.body)
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
});

app.delete("/api/tasks/:id", (req, res) => {
	Task.findByIdAndDelete(req.params.id)
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
});

app.listen(5001, (req, res) => {
	console.log("listening on port 5001");
});
