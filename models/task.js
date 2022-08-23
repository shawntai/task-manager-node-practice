const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
	{
		title: String,
		description: String,
		completed: Boolean,
	},
	{ timestamps: true }
);

const Task = model("Task", taskSchema);

module.exports = Task;