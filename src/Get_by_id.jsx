import './Get_by_id.css';
import { alertIn } from './Alert_Div';
import axios from 'axios';
import React from 'react';

export default function Get_by_id({ setPopMsg }) {

    let [state, useStatee] = React.useState(true);

    const [getdata, setgetdata] = React.useState({
        productId: false,
        brand: "",
        model: "",
        price: 0,
        series: ""
    })

    // React.useEffect(() => {
    //     (async () => {

    //         // let res = await axios.get(`http://localhost:8080/getbyid?pid=${window.location.search.split("=")[1]}`)
    //         // console.log(res);  
    //         fetch(`http://localhost:8080/getbyid?pid=${window.location.search.split("=")[1]}`,
    //             {
    //                 headers: {
    //                     "content-type": "application/json"
    //                 }
    //             })
    //             .then(res => res.json())
    //             .then(res => {
    //                 console.log(res);
    //                 let result = JSON.stringify(res)
    //                 console.log(result, "res");
    //                 if (res.status == 500) {
    //                     alert("error")
    //                 }
    //                 else {
    //                     // window.location.pathname="./get_info"
    //                 }
    //             })

    //     }

    //     )()
    // }, 0)

    return (
        <div className='get-wrapper'>
            <div className='get'>
                <div className='get_det'>
                    <div className='Get'>
                        <h2>GET BY ID</h2>
                    </div>
                    <div className="get-input-wrapper">
                        <label htmlFor="pid" className="inputlable">
                            <div className="get-inputDiv">
                                <p className="input-rec">Product ID</p>
                                <input id='pid' type="text" className="get-input" required />
                            </div>
                        </label>

                        <div className='get_submit_div'>
                            <button className='get_submit' onClick={() => {
                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    if (!val.value) flag = false
                                })
                                if (flag) {
                                    let id = document.getElementById("pid").value
                                    console.log(id)
                                    // window.location.href = `http://localhost:3000/get_by_id?pid=${id}`

                                    fetch(`http://localhost:8080/getbyid?pid=${id}`,
                                        {
                                            headers: {
                                                "content-type": "application/json"
                                            }
                                        })
                                        .then(res => res.json())
                                        .then(res => {
                                            console.log(res);
                                            let result = JSON.stringify(res)
                                            console.log(result, "res");
                                            if (res.status == 500) {
                                                setTimeout(() => {
                                                    setPopMsg("ID doesn't exist.")
                                                    alertIn();
                                                }, 10)
                                            }
                                            else {
                                                window.location.href = "http://localhost:3000/get_info?pid=" + id
                                            }
                                        })

                                }
                                else {
                                    setTimeout(() => {
                                        setPopMsg("Please Enter the Values.")
                                        alertIn();
                                    }, 1000)
                                }
                            }}>GET</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
