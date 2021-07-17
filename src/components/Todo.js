import React, { useEffect, useState } from 'react';
import TodoBody from './TodoBody';
import TodoList from './TodoList';

const todoLocalStorage = () => {
    const todo = localStorage.getItem('Todos')
    if(todo){
        return JSON.parse(localStorage.getItem('Todos'))
    }else{
        return []
    }
}

const Todo = () => {
    const [state, setState] = useState("")
    const [addItem, setAddItem] = useState(todoLocalStorage());
    const [toggleBtn,setToggleBtn] = useState(true)
    const [editedItem,setEditedItem] = useState(null)
    const todoChangeData = (e) => {
        setState(e.target.value);
    }
    const addTodoList = () => {
        if(state < 5){
            alert('Plz fill in the Todo Box al least less than 5 charaecter')
        }else if(state && !toggleBtn){
            setAddItem(
                addItem.map((val) => {
                    if(val.id === editedItem){
                        return {...val,name:state}
                    }
                    return val
                })
            )
            setState('')
            setToggleBtn(true)
        }else{
            const allItem = {id: new Date().getTime().toString(), name: state}
            setAddItem([...addItem, allItem])
            setState(" ")
        }
    }
    const deleteTodo = (id) => {
        const deletes = addItem.filter((val) => {
            return id !== val.id
        })
        setAddItem(deletes)
    }
    const editTodoList = (id) => {
        const findTodo = addItem.find((val) => val.id === id)
        setState(findTodo.name)
        setToggleBtn(false)
        setEditedItem(id)
    }
    const deleteAllTodo = () => {
        setAddItem([])
    }
    useEffect(() => {
        localStorage.setItem('Todos',JSON.stringify(addItem))
    },[addItem])
    return (
        <>
            <h1 className="text-white text-center text-2xl font-bold py-12">
                Simple React ToDo App
            </h1>
            <TodoBody toggleBtn={toggleBtn} state={state} changeState={todoChangeData} addTodoList={addTodoList} />
            <TodoList deleteAllTodo={deleteAllTodo} editTodoList={editTodoList}  deleteTodo={deleteTodo} addItem={addItem} />
        </>
    )
}

export default Todo