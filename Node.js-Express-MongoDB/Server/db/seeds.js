use task-list;
db.dropDatabase();

db.tasks.insertMany([
    {
      "description": "Take out trash",
      "completed": false,
    },
    {
      "description": "Wash Car",
      "completed": false,
    },
    {
      "description": "Pick up shopping",
      "completed": false,
    },
    {
      "description": "Clean Gutters",
      "completed": false,
    }

]);