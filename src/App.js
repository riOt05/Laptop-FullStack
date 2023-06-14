// import logo from './logo.svg';
import Header from './Header';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Forget_Password1 from './Forget_Password1';
import Forget_Password2 from './Forget_Password2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alert_Div from './Alert_Div';
import Crud from './Crud';
// import Get from './Delete_by_id';
import { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import Get_by_id from './Get_by_id';
import Insert from './Insert';
import Update from './Update'
import Get from './Get';


function App() {

  let fpEmail = useRef("");

  const [updateData, setUpdateData] = useState({
    productId: 0,
    brand: "Default",
    model: "Default",
    price: 0,
    series: "Default"
  })
  // const [getdata,setgetdata] = useState({
  //   productId:0,
  //   brand:"Default",
  //   model:"Default",
  //   price:0,
  //   series:"Default"
  // }) 


  // const [item,setItem] = useState([]);
  // const [trigger,setTrigger] = useState(false);

  // const [pid,setPid] = useState("");
  // const [brand,setBrand] = useState("");
  // const [model,setModel] = useState("");  
  // const [price,setPrice] = useState("");
  // const [series,setSeries] = useState("");

  // const [field,setField] = useState("");

  const newUser = JSON.parse(localStorage.getItem("user"))
  
  const login = JSON.parse(localStorage.getItem("is-login"))

  let [popMsg, setPopMsg] = useState("hi")

  const [isLogin, setIsLogin] = useState((login === null || login === undefined) ? false : login)
  
  const [userData, setUserData] = useState((newUser === null || newUser === undefined) ? {} : newUser)

  useEffect(() => {
    localStorage.setItem("is-login", JSON.stringify(isLogin))
  }, [isLogin])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData))
  }, [userData])

  

  //  Axios.get('http://localhost:8080/1').then(res => setItem(res.data))

  


  // const insertItem = () =>{
  //   Axios.post('http://localhost:8080/insert',{pid,brand,model,price,series})
  //   .then(res => setItem([...item,res.data])).then(()=>setTrigger(!trigger))
  // }

  //  const deleteItem = () =>
  //  {
  //     Axios.delete(`http://localhost:8080/delete?pid=${field}`).then(res => setItem(res.data),()=>{})    
  //  }



  return (
    <div>

      {/* {item.map((s, id) =>
        {
          return(
            <div key={id}>
            {s.pid}
            {' - '}
            {s.brand}
            {' - '}
            {s.model}
            {' - '}
            {s.price}
            {' - '}
            {s.series}
            </div>
          )
        })} */}

      {/*/////////////// GET /////////////////////*/}

      {/* <input type='text' value={pid} onChange={(s)=> setPid(s.target.value)}/>
<input type='text' value={brand} onChange={(s)=> setBrand(s.target.value)}/>
<input type='text' value={model} onChange={(s)=> setModel(s.target.value)}/>
<input type='text' value={price} onChange={(s)=> setPrice(s.target.value)}/>
<input type='text' value={series} onChange={(s)=> setSeries(s.target.value)}/>
<button onClick={insertItem}>Insert</button> */}

      {/*//////////////// INSERT ////////////////////*/}



      {/*//////////////// UPDATE ////////////////////*/}

      {/* <input type='text' onChange={(s)=> setField(s.target.value)}/>
<button onClick={deleteItem}>delete</button> */}

      {/*//////////////// DELETE ////////////////////*/}

      <Header isLogin={isLogin} setIsLogin={setIsLogin} user={userData} />
      <BrowserRouter>
        <Routes>
          <Route path='/sign-up' element={<SignUp setPopMsg={setPopMsg} />} />
          <Route path='/' element={<SignUp setPopMsg={setPopMsg} />} />
          <Route path='/login' element={<Login userData={userData} setUserData={setUserData} setIsLogin={setIsLogin} setPopMsg={setPopMsg}  />} />
          <Route path='/frpass1' element={<Forget_Password1 setPopMsg={setPopMsg} fpEmail={fpEmail} />} />
          <Route path='/frpass2' element={<Forget_Password2 setPopMsg={setPopMsg} fpEmail={fpEmail} />} />
          <Route path='/Crud' element={<Crud />} />
          <Route path='/Get_by_id' element={<Get_by_id setPopMsg={setPopMsg} />} />
          <Route path='/Insert' element={<Insert setPopMsg={setPopMsg} />} />
          <Route path='/Update' element={<Update updateData={updateData} setPopMsg={setPopMsg} />} />
          <Route path='/Get_info' element={<Get setPopMsg={setPopMsg} />} />
        </Routes>
      </BrowserRouter>
      <Alert_Div msg={popMsg} />
    </div>
  );
}

export default App;
