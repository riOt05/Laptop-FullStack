import React from 'react';
import './Get.css';
import axios from 'axios';
import Alert_Div, { alertIn } from './Alert_Div';


export default function Get({ setPopMsg }) {

    const [getdata, setgetdata] = React.useState({
        productId: false,
        brand: "",
        model: "",
        price: 0,
        series: ""
    })

    let id = window.location.search.split("=")[1]

    React.useEffect(() => {
        (async () => {
            try {
                let res = await axios.get(`http://localhost:8080/getbyid?pid=${id}`)
                console.log(res);
                setgetdata(prev => {
                    return {
                        // productId:res.data.pid,
                        brand: res.data.brand,
                        model: res.data.model,
                        series: res.data.series,
                        price: res.data.price
                    }
                })

            }
            catch (e) {

                setPopMsg("not found")
                alertIn(1000)
                window.location.href = "http://localhost:3000/get_by_id "
            }
        })()
    }, 0)

    let data = "HELLO"
    return (
        <div className='get_info_wrap'>
            <div className='get_info_child'>
                <h3 className='get-title'>Details of Product ID - {id}</h3>
                <table className="get-table">
                    <thead className="get-head">
                        <tr className="get-brand">
                            <td className="get-tdhead">BRAND</td>
                            <td className="get-td"> : </td>
                            <td className="get-td">{getdata.brand}</td>
                        </tr>
                        <tr className="get-model">
                            <td className="get-tdhead">MODEL</td>
                            <td className="get-td"> : </td>
                            <td className="get-td">{getdata.model}</td>
                        </tr>
                        <tr className="get-series">
                            <td className="get-tdhead">SERIES</td>
                            <td className="get-td"> : </td>
                            <td className="get-td">{getdata.series}</td>
                        </tr>
                        <tr className="get-price">
                            <td className="get-tdhead">PRICE</td>
                            <td className="get-td"> : </td>
                            <td className="get-td">{getdata.price}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}