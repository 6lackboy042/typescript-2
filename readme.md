# Todo List Application (TypeScript)

## Overview
This is a simple Todo List application implemented in TypeScript. It allows users to add, complete, remove, and list todo items while maintaining an array of `TodoItem` objects.

## Features
- Add a new todo item with a task description and due date.
- Mark a todo item as completed.
- Remove a todo item by its ID.
- List all todo items.
- Filter todo items by their completion status.
- Update the task description of a todo item.
- Clear all completed todos.

## Installation
To run this project, make sure you have Node.js and TypeScript installed.

```sh
npm install
```

## Usage

### Data Structure
```ts
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}
```

### Example Usage
```ts
const todoList = new TodoList();
todoList.addTodo("Buy groceries", new Date("2024-02-25"));
todoList.addTodo("Finish project", new Date("2024-02-28"));
todoList.completeTodo(1);
todoList.listTodos().forEach(todo => console.log(todo));
```

### Expected Output
```
[ { id: 1, task: 'Buy groceries', completed: true, dueDate: 2024-02-25 },
  { id: 2, task: 'Finish project', completed: false, dueDate: 2024-02-28 } ]
```

## License
This project is licensed under the MIT License.

