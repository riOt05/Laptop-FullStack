import { useState } from 'react';
import './Alert_Div.css';

let setMessage;

export function alertIn(message){
    let alertBox = document.querySelector("#customAlertBox");
    alertBox.classList.add("alert_wrap-on");

    setTimeout(() => {
        alertBox.classList.remove("alert_wrap-on");
    }, 2000);
}

export default function Alert_Div({msg})
{
    return(
        <div id='customAlertBox' className='alert_wrap'>
           <h3 className='alert_msg'>{msg}</h3>
        </div>
    );
}

