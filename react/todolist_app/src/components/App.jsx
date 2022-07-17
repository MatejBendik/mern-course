import React from "react";

function App() {

  const [inputText, setInputText] = React.useState(""); 
  const [items, setItems] = React.useState(["Item"]);

  function handleChange(event){
    const newValue = event.target.value
    setInputText(newValue);
  }

  // this function is triggered when button is clicked, and it triggers setItems state function which will return prevItems - it's array [] - empty at the beginning 
  // then push inputText to the array, which is text user typed to <input /> and after that, it will clear out input field to set it to empty string ""
  function addItem(){
    setItems( (prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text"
          name="todoItem" 
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {items.map( (todoItem) =>{
              return <li> {todoItem} </li>
            }
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
