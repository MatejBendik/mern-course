import React from 'react';

function ToDoItem(props){
    return (
        <div onClick={() => {                       // this arrow function will be triggered only when button is clicked
            props.onChecked(props.id);              // and props id will be take with onChecked function with props
        }} >
            <li style={{
                }} 
            >
                {props.todoItem}
            </li>
        </div>
    )
}


export default ToDoItem;