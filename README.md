# task-manager-node-practice
In this project, I practice building a simple REST API with Node.js/Express.js and MongoDB. 

## Set Up
To start the server, call `npm start`.

## Object Model
```
{
  title: String,
  description: String,
  completed: Boolean,
}
```

## API Endpoints
- `GET` `localhost:5001/api/tasks`: get all the tasks in the database
- `GET` `localhost:5001/api/tasks/:id`: get a specific tasks by id
- `POST` `localhost:5001/api/tasks`: create a new task
- `PUT` `localhost:5001/api/tasks/:id`: edit/update a task
- `DELETE` `localhost:5001/api/tasks/:id`: delete a task
