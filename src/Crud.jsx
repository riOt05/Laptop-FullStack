import { useEffect, useState } from 'react';
import './Crud.css';
import axios from 'axios';

export default function Crud() {


    function Buttons({id}) {
        function deleteById(){
            let pid = id;
            if(axios.delete(`http://localhost:8080/delete?pid=${pid}`))    
            window.location.reload()
            
        }
        
        return (
            <>
                <div className="btns-wrapper">
                    <button className="btns-button" style={{ backgroundColor: "rgb(55, 255, 0)", color: "black"}} onClick={() => {
                        window.location.href = `/update?pid=${id}`
                    }}>UPDATE</button>
                    <button onClick={()=>{deleteById()}} className="btns-button" >DELETE</button>
                </div>
            </>
        )
    }

    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/getbyuid?uid=${window.localStorage.getItem("uid")}`)
            .then(res => {
                setData(res.data)
            })
    }, [])

    // let data = [
    //     {
    //         pid: 14,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     },
    //     {
    //         pid: 15,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     },
    //     {
    //         pid: 16,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     }, {
    //         pid: 17,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     }, {
    //         pid: 18,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     },
    //     {
    //         pid: 14,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     },
    //     {
    //         pid: 15,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     },
    //     {
    //         pid: 16,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     }, {
    //         pid: 17,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     }, {
    //         pid: 18,
    //         brand: "bnr",
    //         model: "mode",
    //         price: 9090,
    //         series: "ser"
    //     }
    // ]
    return (
        <>
            <div className='Crud_wrap'>
                <div className='crud_div'>
                    <button className='crud_btn' onClick={() => {
                        window.location.pathname = "/Get_by_id"
                    }}>GET</button>
                    <p className='crud_exe'>Get data by Id from the database</p>
                </div>
                <div className='crud_div'>
                    <button className='crud_btn' onClick={() => {
                        window.location.pathname = "/Insert"
                    }}>INSERT</button>
                    <p className='crud_exe'>Insert a new data into the database</p>
                </div>
            </div>
            <div className="crud-body">
                <table className="crud-table">
                    <thead className="crud-head">
                        <tr className="crud-tr">
                            <td className="crud-td">Product ID</td>
                            <td className="crud-td">Brand</td>
                            <td className="crud-td">Model</td>
                            <td className="crud-td">Series</td>
                            <td className="crud-td">Price</td>
                            <td className="crud-td">Operations</td>
                        </tr>
                    </thead>
                    <tbody className="crud-tbody">
                        {
                            data.map((elem) => {
                                return (
                                    <>
                                        <CrudCard id={elem.pid} brand={elem.brand} model={elem.model} price={elem.price} series={elem.series} Operation={<Buttons id={elem.pid} />} />
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

function CrudCard({ id, brand, model, series, price, Operation }) {
    return (
        <>
            <tr className="ccrud-tr">
                <td className="ccrud-td">{id}</td>
                <td className="ccrud-td">{brand}</td>
                <td className="ccrud-td">{model}</td>
                <td className="ccrud-td">{series}</td>
                <td className="ccrud-td">{price}</td>
                <td className="ccrud-td ccrud-td-btn">{Operation}</td>
            </tr>
        </>
    )
}
