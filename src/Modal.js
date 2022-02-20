import React from 'react';

function Modal(props){
  







    return(
        <div id="modal" onClick={props.onHideModal} className={props.show? "modal": "modal hideModal"}>
            <div className="modalContent">
                <h2>Edit task</h2>
                <form className="formUpdate">
                    <input placeholder={props.itemEdited.text} className="editTaskInput" type="text"/>
                    <button className="btnUpdate" type="button">Update</button>
                </form>
                
            </div>
            
        </div>
    )

}


export default Modal