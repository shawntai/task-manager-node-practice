const Task = require("../models/task");

const getAllTasks = (req, res) => {
	Task.find().then((result) => res.json({ success: true, result }));
};

const getTaskById = (req, res) => {
	Task.findById(req.params.id)
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
};

const createTask = (req, res) => {
	const newTask = new Task(req.body);
	newTask
		.save()
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
};

const updateTask = (req, res) => {
	Task.findByIdAndUpdate(req.params.id, req.body)
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
};

const deleteTask = (req, res) => {
	Task.findByIdAndDelete(req.params.id)
		.then((result) => res.json({ success: true, result }))
		.catch((error) => res.json({ error }));
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
};
