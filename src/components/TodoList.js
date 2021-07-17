import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

const TodoList = ({deleteTodo,addItem,editTodoList,deleteAllTodo}) => {
    return (
        <>
            <div className="mt-8 w-1/3 mx-auto">
                {addItem.map((val) => {
                    return (
                        <>
                            <div className="flex text-white mb-3" key={val.id}>
                                <h1 className="w-full bg-blue-500 p-2 mr-1 hover:bg-blue-600 rounded">{val.name}</h1>
                                <div className="flex">
                                    <Button onClick={() => editTodoList(val.id)} className="editordelete" style={{ marginRight: '3px' }} variant="contained" color="primary">
                                        <EditIcon />
                                    </Button>
                                    <Button className="editordelete" onClick={() => deleteTodo(val.id)} variant="contained" color="secondary">
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            </div>
                        </>
                    )
                })}
                <Button onClick={deleteAllTodo} className="delete">Delete All</Button>
            </div>
        </>
    )
}

export default TodoList