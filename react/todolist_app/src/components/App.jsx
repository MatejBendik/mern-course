import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = React.useState([]);

  // this function is triggered when button is clicked, and it triggers setItems state function which will return prevItems - it's array [] - empty at the beginning 
  // then push inputText to the array, which is text user typed to <input /> and after that, it will clear out input field to set it to empty string ""
  function addItem(){
    setItems( (prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    
    // setItems will update the list of items 
    setItems((prevItems) => {                           // here we are going through the array of prevItems, look through each item and get the index of each item
      return prevItems.filter((item, index) => {
          return index !== id;                          // and return an output of the final array that is going to return all the items were index !== id 
        }
      )     
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map( (todoItem, index) => (
            <ToDoItem 
              key={index}
              id={index}
              todoItem={todoItem} 
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
