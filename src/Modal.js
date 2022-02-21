import React, { useState } from "react";

function Modal(props) {
  const [editItem, setEditItem] = useState("");

  function handleChangeEdit(event) {
    let t = event.target.value;
    setEditItem(t);
  }

  function onUpdate(event) {
    event.preventDefault();
    props.onEditItemProp(editItem);
    setEditItem("");
  }

  return (
    <div
      id="modal"
      onClick={props.onHideModal}
      className={props.show ? "modal" : "modal hideModal"}
    >
      <div className="modalContent">
        <h2>Edit task</h2>
        <form className="formUpdate">
          <input
            onChange={handleChangeEdit}
            className="editTaskInput"
            value={editItem}
            placeholder={props.itemEdited.text}
            type="text"
          />
          <button onClick={onUpdate} className="btnUpdate">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
