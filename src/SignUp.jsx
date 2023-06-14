import Header from './Header';
import './SignUp.css';
import { alertIn } from './Alert_Div';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp({ setPopMsg }) {

    return (
        <div className='signup-wrapper'>
            <div className='signup'>
                <div className='signup_det'>
                    <div className='sign_up'>
                        <h2>Sign Up</h2>
                    </div>
                    <div className="signup-input-wrapper">
                        <label htmlFor="name" className="inputlable">
                            <div className="signup-inputDiv">
                                <p className="input-rec">Username</p>
                                <input id='name' type="text" className="signup-input" required />
                            </div>
                        </label>
                        <label htmlFor="mail" className="inputlable">
                            <div className="signup-inputDiv">
                                <p className="input-rec">E-Mail</p>
                                <input id='mail' type="email" className="signup-input" required />
                            </div>
                        </label>
                        <label htmlFor="phno" className="inputlable">
                            <div className="signup-inputDiv">
                                <p className="input-rec">Mobile Number</p>
                                <input id='phno' type='number' className="signup-input" required />
                            </div>
                        </label>
                        <label htmlFor="crpass" className="inputlable">
                            <div className="signup-inputDiv">
                                <p className="input-rec">Create Password</p>
                                <input id='crpass' type="password" className="signup-input" required />
                            </div>
                        </label>
                        <div className='show_pass_wrap'>
                            <input
                                onClick={(event) => {
                                    let tag = document.querySelectorAll("input");
                                    if (event.target.checked) {
                                        tag[3].type = "text";
                                        return;
                                    }
                                    tag[3].type = "password"
                                }}
                                type="checkbox" />
                            <label className='signup_showpass'>
                                Show Password
                            </label>
                        </div>
                        <label htmlFor="cnpass" className="inputlable">
                            <div className="signup-inputDiv">
                                <p className="input-rec">Confirm Password</p>
                                <input id='cnpass' type="password" className="signup-input" required />
                            </div>
                        </label>
                        <div className='signup_submit_div'>
                            <button onClick={() => {
                                let username = document.getElementById("name").value
                                let email = document.getElementById("mail").value
                                let phoneno = document.getElementById("phno").value
                                let password = document.getElementById("crpass").value
                                console.log(username, email, phoneno, password)
                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    if (!val.value) flag = false
                                })
                                if (flag) {
                                    let cpwd = document.querySelectorAll("input")[5].value
                                    let cnpss = document.querySelectorAll("input")[3].value
                                    if (cpwd === cnpss) {
                                        axios.post('http://localhost:8080/addUser', { username, email, password, phoneno })
                                            .then(res => {
                                                if (!res.data){
                                                    setPopMsg("Something went wrong");
                                                alertIn();
                                                return
                                                }
                                                setPopMsg("You have signed up Successfully ! Please , Login");
                                                alertIn();
                                                setTimeout(()=>{
                                                    window.location.pathname="/login"
                                                },2000)
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

                            }} className='signup_submit' >Submit</button>
                        </div>
                        <div className='wrap_sign_to_log'>
                            <a className='sign_to_log' href='/login'>Already a User ? - Login.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}