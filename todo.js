interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date): void {
        this.todos.push({ id: this.nextId++, task, completed: false, dueDate });
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(item => item.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(item => item.id !== id);
    }

    listTodos(): TodoItem[] {
        return this.todos;
    }

    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(item => item.completed === completed);
    }

    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(item => item.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }

    clearCompletedTodos(): void {
        this.todos = this.todos.filter(item => !item.completed);
    }
}

// Example Usage
const myTodoList = new TodoList();
myTodoList.addTodo("Buy groceries", new Date("2024-03-01"));
myTodoList.addTodo("Finish project", new Date("2024-03-05"));
myTodoList.completeTodo(1);
console.log(myTodoList.listTodos());