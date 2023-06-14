
import './Forget_Password.css';
import { alertIn } from './Alert_Div';
import axios from 'axios';

export default function Forget_Password2({ setPopMsg, fpEmail }) {
    return (
        <div className='frp-wrapper'>
            <div className='frp'>
                <div className='frp2_det'>
                    <div className='frp_up'>
                        <h2>Change Password</h2>
                    </div>
                    <div className="frp-input-wrapper">
                        <label htmlFor="crpass" className="inputlable">
                            <div className="frp-inputDiv">
                                <p className="input-rec">Create Password</p>
                                <input id='crpass' type="password" className="frp-input" required />
                            </div>
                        </label>
                        <div className='show_pass_wrap'>
                            <input
                                onClick={(event) => {
                                    let tag = document.querySelectorAll("input");
                                    if (event.target.checked) {
                                        tag[0].type = "text";
                                        return;
                                    }
                                    tag[0].type = "password"
                                }}
                                type="checkbox" />
                            <label className='signup_showpass'>
                                Show Password
                            </label>
                        </div>
                        <label htmlFor="conpass" className="inputlable">
                            <div className="frp-inputDiv">
                                <p className="input-rec">Confirm Password</p>
                                <input id='conpass' type="password" className="frp-input" required />
                            </div>
                        </label>
                        <div className='frp_submit_div'>
                            <button onClick={() => {

                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    if (!val.value) flag = false
                                })
                                if (flag) {
                                    let cpwd = document.querySelectorAll("input")[0].value
                                    let cnpss = document.querySelectorAll("input")[2].value
                                    if (cpwd === cnpss) {
                                        axios.post("http://localhost:8080/frpass", { password: cpwd, email: fpEmail.current })
                                            .then(res => {
                                                if (!res.data) {
                                                    setPopMsg("Something Went Wrong");
                                                    alertIn();
                                                    return
                                                }
                                                setPopMsg("Your Password has been changes Successfully ! Please , Login");
                                                alertIn();
                                                setTimeout(() => {
                                                    window.location.pathname = "/login"
                                                }, 2000);
                                            })


                                    }
                                    else {
                                        setPopMsg("Both Password Values must be same.")
                                        alertIn();
                                    }
                                }
                                else {
                                    setPopMsg("Please Enter the Values.")
                                    alertIn();
                                }


                            }} className='frp_submit'>Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}