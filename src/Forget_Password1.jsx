import Header from './Header';
import './Forget_Password.css';
import { alertIn } from './Alert_Div';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
export default function Forget_Password1({setPopMsg,fpEmail}) {
    let navigator = useNavigate();
    return (
        <div className='frp-wrapper'>
            <div className='frp'>
                <div className='frp_det'>
                    <div className='frp_up'>
                        <h2>Forget Password</h2>
                    </div>
                    <div className="frp-input-wrapper">
                        <label htmlFor="mail" className="inputlable">
                            <div className="frp-inputDiv">
                                <p className="input-rec">E-Mail</p>
                                <input id='mail' type="text" className="frp-input" required />
                            </div>
                        </label>
                        <div className='frp_submit_div'>
                            <button onClick={() => {
                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    if (!val.value) flag = false
                                })
                                if (flag) {
                                  let email = document.getElementById("mail").value;
                                  let password = "";
                                  axios.post("http://localhost:8080/frpass",{email,password})
                                  .then(respo=>{
                                    if(!respo.data){
                                        setPopMsg("Enter Valid Email")
                                        alertIn();
                                        return;
                                    }
                                     fpEmail.current = email;
                                     navigator("/frpass2")
                                  })  
                                }
                                else {
                                    setPopMsg("Please Enter the Values.")
                                    alertIn();
                                }
                            }} className='frp_submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}