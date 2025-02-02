import React, { useState } from 'react'; 
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'; 

function TodoList() {
    const [todos, setTodos] = useState([]); 

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}  {/* Ensure id is unique */}
                        id={todo.id}
                        task={todo.task}
                        removeTodo={removeTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
