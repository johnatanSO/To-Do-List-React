import React, { useState, useEffect } from "react";
import "./Todo.css";
import List from "./List";
import Item from "./Item";
import Header from './Header'

const SAVED_ITEMS = "savedItems"




function Todo() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState(false);
  const [theme2, setTheme2] = useState(false);

  useEffect(() =>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if(savedItems){
      setItems(savedItems)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    if(items.length > 0){
      document.title = (`(${items.length}) Todo list`)
    }else{
      document.title = 'Todo list'
    }
    
  },[items])

  

  function onAddItemFunc(text) {
    let item = new Item(text);
    setItems([...items, item]);
    
  }

  function onItemDeletedFunc(item) {
    let filteredItems = items.filter((it) => {
      return it.id !== item.id;
    });
    setItems(filteredItems);
  }
  function clearItems() {
    setItems([]);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updatedItems);
  }

  function onHandleTheme() {
    setTheme(!theme);
    console.log(theme)
}

  return (
    <div className={theme ? "themeBar dark container" : "themeBar container"}>

      <Header theme={theme} onHandleTheme={onHandleTheme}></Header>
      <h1>Todo list</h1>
      <TodoForm onAddItemProp={onAddItemFunc}></TodoForm>

      <List
        onDone={onDone}
        theme={theme}
        clearItems={clearItems}
        onItemDeletedProp={onItemDeletedFunc}
        items={items}
      ></List>
    </div>
  );
}

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItemProp(text);
      setText("");
    }
  }

  return (
    <form>
      <input
        placeholder="Add your task"
        onChange={handleChange}
        type="text"
        value={text}
      ></input>
      <button className="add" onClick={addItem}>
        +
      </button>
    </form>
  );
}

export default Todo;
