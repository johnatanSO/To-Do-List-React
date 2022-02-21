import React from "react";
import ListItem from "./ListItem";

function List(props) {
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
          <ListItem
            editItemsProp={props.editItemsProp}
            key={item.id}
            onDone={props.onDone}
            onItemDeletedProp={props.onItemDeletedProp}
            item={item}
          ></ListItem>
        );
      })}{" "}
    </ul>
  );
}

export default List;
