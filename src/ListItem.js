import React from "react";

function DoneImg(props) {
  if (props.done) {
    return (
      <img alt="checked" className="doneImg" src="./assets/checked.png"></img>
    );
  } else {
    return (
      <img alt="check" className="unDoneImg" src="./assets/check.png"></img>
    );
  }
}

function ListItem(props) {
  return (
    <li
      className={props.item.done ? "done listItem" : " listItem"}
      id={props.item.id}
      key={props.item.id}
    >
      <div className="itemContent">
        <button
          onClick={() => {
            props.onDone(props.item);
          }}
          className="btnDone"
        >
          <DoneImg done={props.item.done}></DoneImg>
        </button>
        <p>{props.item.text}</p>
      </div>

      <div className="editAndDelete">
        <button className="btnEdit" onClick={()=>{props.editItemsProp(props.item)}}><img src="./assets/edit.png" /></button>
        <button
          onClick={() => {
            props.onItemDeletedProp(props.item);
          }}
          className="btnDelete"
        >
          <img src="./assets/delete.png" />
        </button>
      </div>
    </li>
  );
}

export default ListItem;
