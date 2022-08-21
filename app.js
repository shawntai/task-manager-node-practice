const express = require("express");

const app = express();

app.get("/api/tasks", (req, res) => {
	console.log("requst came in");
	res.json({ success: true });
});

app.get("/api/tasks/:id", (req, res) => {
	console.log("requst came in");
	res.json({ success: true });
});

app.post("/api/tasks", (req, res) => {
	console.log("requst came in");
	res.json({ success: true });
});

app.put("/api/tasks/:id", (req, res) => {
	console.log("requst came in");
	res.json({ success: true });
});

app.delete("/api/tasks/:id", (req, res) => {
	console.log("requst came in");
	res.json({ success: true });
});

app.listen(5001, (req, res) => {
	console.log("listening on port 5001");
});
