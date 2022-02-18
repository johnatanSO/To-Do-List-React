import React from "react";

function List(props) {




  return (
    <ul>
      {props.items.map((item) => {
        return (

            <li id={item.id} key={item.id}>

                {item.text}
                <div className="buttons">
                    <button className="btnDone"><img src="./assets/checked.png"/></button>

                    <button onClick={()=>{props.onItemDeletedProp(item)}} className="btnDelete"><img src="./assets/delete.png"/></button>
                </div>
                
            </li>
            );
      })}
    </ul>
  );
}

export default List;
