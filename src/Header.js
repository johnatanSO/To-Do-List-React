import React from 'react';
import Theme from './Theme';




function Header(props){
    let mounths = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let date = new Date()

    let today = `${mounths[date.getMonth()+1]} ${date.getDay()}, ${date.getFullYear()}`



    return(
        <div className="header">
            <Theme onHandleTheme={props.onHandleTheme} theme={props.theme}></Theme>
            <h3>{today}</h3>
        </div>
    )
}


export default Header