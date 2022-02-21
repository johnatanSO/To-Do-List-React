import React, { useState} from 'react';


function Modal(props){

    const [editItem, setEditItem] = useState()



    function handleChangeEdit(event) {
        console.log(props.items)
        let t = event.target.value;
        setEditItem(t)
        console.log(editItem)
      }
  







    return(
        <div id="modal" onClick={props.onHideModal} className={props.show? "modal": "modal hideModal"}>
            <div className="modalContent">
                <h2>Edit task</h2>
                <form className="formUpdate">
                    <input onChange={handleChangeEdit} /* placeholder={props.itemEdited.text} */ className="editTaskInput" type="text"/>
                    <button onClick={()=>{props.onEditItemProp(editItem)}} className="btnUpdate" type="button">Update</button>
                </form>
                
            </div>
            
        </div>
    )

}


export default Modal