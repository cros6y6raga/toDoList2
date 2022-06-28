import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS2', isDone: false}
    ]
    const removeTasks = (elId:number) => {
        tasks1 = tasks1.filter((el)=>el.id!==elId)
        console.log(tasks1)
    }
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} removeTasks={removeTasks}/>
        </div>
    );
}

export default App;
