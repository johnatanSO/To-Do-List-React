import React from "react";

function List(props) {
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

  return (
    <ul>
      <button
        onClick={() => {
          props.clearItems();
        }}
        className="btnClear"
      >
        Clear list
      </button>
      {props.items.map((item) => {
        return (
          <li className={item.done ? "done" : ""} id={item.id} key={item.id}>
            <div className="itemContent">
              <button
                onClick={() => {
                  props.onDone(item);
                }}
                className="btnDone"
              >
                <DoneImg done={item.done}></DoneImg>
              </button>
              <p>{item.text}</p>
            </div>

            <button
              onClick={() => {
                props.onItemDeletedProp(item);
              }}
              className="btnDelete"
            >
              <img src="./assets/delete.png" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
