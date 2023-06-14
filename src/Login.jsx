import Header from './Header';
import './Login.css';
import { alertIn } from './Alert_Div';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ userData, setUserData, setIsLogin, setPopMsg }) {

    const [loginData, setLoginData] = useState({})
    let loginNavigator = useNavigate()

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <div className='login_det'>
                    <div className='login_up'>
                        <h2>Login</h2>
                    </div>
                    <div className="login-input-wrapper">
                        <label htmlFor="name" className="inputlable">
                            <div className="login-inputDiv">
                                <p className="input-rec">Username</p>
                                <input onChange={handleChange} name='username' id='name' type="text" className="login-input" required />
                            </div>
                        </label>
                        <label htmlFor="pass" className="inputlable">
                            <div className="login-inputDiv">
                                <p className="input-rec">Password</p>
                                <input onChange={handleChange} name='password' id='pass' type="password" className="login-input" required />
                            </div>
                        </label>
                        <div className='show_pass_wrap'>
                            <input
                                onClick={(event) => {
                                    let tag = document.querySelectorAll("input");
                                    if (event.target.checked) {
                                        tag[1].type = "text";
                                        return;
                                    }
                                    tag[1].type = "password"
                                }}
                                type="checkbox" />
                            <label className='login_showpass'>
                                Show Password
                            </label>
                        </div>
                        {/* <a className='sign_to_log' href=''>Already a User ? - Login.</a> */}
                        <div className='login_submit_div'>
                            <button onClick={() => {
                                let username = document.getElementById("name").value
                                let password = document.getElementById("pass").value

                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    if (!val.value) flag = false
                                })
                                if (flag) {
                                    axios.post("http://localhost:8080/getUser", { username, password })
                                        .then(respo => {
                                            if (!respo.data) {
                                                setPopMsg("Invalid Data")
                                                alertIn();
                                                return
                                            }
                                            axios.post("http://localhost:8080/getOneUser", { username, password })
                                                .then(res => {
                                                    // console.log(res.data);
                                                    setIsLogin(true)
                                                    setUserData(loginData)
                                                   window.localStorage.setItem("uid",res.data.uid)
                                                    loginNavigator("/Crud")
                                                    return
                                                })
                                        })
                                }
                                else {
                                    setPopMsg("Please Enter the Values.")
                                    alertIn();
                                }
                            }} className='login_submit'>Submit</button>
                        </div>
                        <div className='frpass_wrap'>
                            <a href='/frpass1' className='frpass'>Forget Password ?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}