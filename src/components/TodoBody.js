import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

const TodoBody = ({state,changeState,addTodoList,toggleBtn}) => {
    return (
        <>
            <div className="w-1/3 items-center bg-white mx-auto rounded p-10">
                <div className="flex ">
                    <input className="focus:outline-none border border-gray-400 focus:ring-1 focus:ring-indigo-600 w-full p-1 rounded text-base" type="text" placeholder="Enter you Title" value={state} onChange={changeState} />
                    <Button  className="addbtn" variant="contained" color="secondary">
                        {toggleBtn ? <AddIcon onClick={addTodoList} /> : <EditIcon onClick={addTodoList} />}
                    </Button>
                </div>
                <p></p>
            </div>
        </>
    )
}

export default TodoBody