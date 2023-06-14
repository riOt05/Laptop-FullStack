import './Insert.css';
import { alertIn } from './Alert_Div';
import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
export default function Insert({ setPopMsg})
{
  const [pid,setPid] = useState("");
  const [brand,setBrand] = useState("");
  const [model,setModel] = useState("");  
  const [price,setPrice] = useState("");
  const [series,setSeries] = useState("");
  const [trigger,setTrigger] = useState(false);
  const [item,setItem] = useState([]);
  let insertNavigate = useNavigate()

    return(
        <div className='insert-wrapper'>
            <div className='insert'>
                <div className='insert_det'>
                    <div className='Insert'>
                        <h2>INSERT</h2>
                    </div>
                    <div className="insert-input-wrapper">
                        <label htmlFor="brand" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Brand</p>
                                <input id='brand' type="text" className="insert-input" required onChange={(s)=> setBrand(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="model" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Model</p>
                                <input id='model' type='text' className="insert-input" required onChange={(s)=> setModel(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="price" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Price</p>
                                <input id='price' type="number" className="insert-input" required onChange={(s)=> setPrice(s.target.value)}/>
                            </div>
                        </label>
                        <label htmlFor="series" className="inputlable">
                            <div className="insert-inputDiv">
                                <p className="input-rec">Series</p>
                                <input id='series' type="text" className="insert-input" required onChange={(s)=> setSeries(s.target.value)}/>
                            </div>
                        </label>
                        <div className='insert_submit_div'>
                            <button className='insert_submit' onClick={()=>{
                                
                                let flag = true
                                document.querySelectorAll("input").forEach(val => {
                                    if (!val.value) flag = false
                                })

                                if(flag)
                                {
                                    Axios.post('http://localhost:8080/insert',{pid,brand,model,price,series,uid:window.localStorage.getItem("uid")}).
                                    then(res => setItem([...item,res.data])).
                                    then(()=>setTrigger(!trigger))
                                    setPopMsg("Data has been inserted successfully.");
                                    alertIn();
                                    setTimeout(()=>{
                                        insertNavigate("/Crud")
                                    },2000)
                                }
                                else
                                {
                                    setPopMsg("Please Enter the Values.")
                                    alertIn();
                                }
                            }}>INSERT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 