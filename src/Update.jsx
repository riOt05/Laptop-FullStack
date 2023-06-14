import './Insert.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { alertIn } from './Alert_Div';
import { useNavigate } from 'react-router-dom';
export default function Update({ setPopMsg,updateData })
{
    let id = window.location.search.split("=")[1]
    const [updata, setupdata] = React.useState({
        productId: false,
        brand: "",
        model: "",
        price: "",
        series: "",
        uid:0
    })

    const [pid,setPid] = useState("");
    const [brand,setBrand] = useState("");
    const [model,setModel] = useState("");  
    const [price,setPrice] = useState("");
    const [series,setSeries] = useState("");
    const [trigger,setTrigger] = useState(false);
    const [item,setItem] = useState([]);
    let insertNavigate = useNavigate()

    React.useEffect(() => {
        (async () => {
            try {
                let res = await axios.get(`http://localhost:8080/getbyid?pid=${id}`)
                console.log(res.data.price);
                setPid(a=>res.data.pid)
                setBrand(a=>res.data.brand)
                setModel(a=>res.data.model)
                setPrice(a=>res.data.price)
                setSeries(a=>res.data.series)
                setupdata(prev => {
                    return {
                        productId:res.data.pid,
                        brand: res.data.brand,
                        model: res.data.model,
                        series: res.data.series,
                        price: res.data.price,
                        uid: res.data.uid
                    }
                })

            }
            catch (e) {
            }
        })()
    }, 0)
    return(
        <div className='insert-wrapper'>
            <div className='insert'>
                <div className='insert_det'>
                    <div className='Insert'>
                        <h2>UPDATE</h2>
                    </div>
                    <div className="insert-input-wrapper">
                        <label htmlFor="pid" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Product ID</p>
                                <input id='pid' type="number" className="insert-input" required  value={updata.productId} onChange={(s)=> setPid(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="brand" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Brand</p>
                                <input id='brand' type="text" className="insert-input" required defaultValue={updata.brand} onChange={(s)=> setBrand(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="model" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Model</p>
                                <input id='model' type='text' className="insert-input" required defaultValue={updata.model} onChange={(s)=> setModel(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="price" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Price</p>
                                <input id='price' type="number" className="insert-input" required  defaultValue={updata.price} onChange={(s)=> setPrice(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="series" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Series</p>
                                <input id='series' type="text"  className="insert-input" required defaultValue={updata.series} onChange={(s)=> setSeries(s.target.value)}/>
                            </div>
                        </label>
                        <div className='insert_submit_div'>
                            <button className='insert_submit' onClick={()=>{
                                
                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    console.log(val.value);
                                    console.log(val.defaultValue);
                                    if (!val.value) flag = false
                                })

                                if(flag)
                                {
                                    axios.put(`http://localhost:8080/update?pid=${id}`,{pid,brand,model,price,series,uid:window.localStorage.getItem("uid")}).
                                    then(res => setItem([...item,res.data])).
                                    then(()=>setTrigger(!trigger))
                                    setPopMsg("Data has been Updated successfully.");
                                    alertIn();
                                    setTimeout(()=>{
                                        window.location.pathname="/Crud"
                                    },1000)
                                }
                                else
                                {
                                    setPopMsg("Please Enter the Values.")
                                    alertIn();
                                }
                            }}>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 