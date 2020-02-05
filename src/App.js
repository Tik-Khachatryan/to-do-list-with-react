import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import Context from "./Context";
import AddTodo from "./components/AddTodo";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, completed: false, title: "buy bread"},
        {id: 2, completed: false, title: "buy butter"},
        {id: 3, completed: false, title: "buy milk"},
    ]);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }


    function addTodo(title) {
        setTodos(
            todos.concat([{
                id: Date.now(),
                completed: false,
                title,
            }])
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }



    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React tutorial</h1>
                <AddTodo onCreate={addTodo}/>
                {
                    todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos !</p>
                }

            </div>
        </Context.Provider>
    );
}

export default App;
