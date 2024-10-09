import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAsyncError, useParams } from "react-router-dom";

function Update() {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch("http://localhost:8000/Book/" + id)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return (
    <>
        <div  className="updatemiddle">update</div>

    <div className="table_class">

  <div className="row mt-3">
      
      <div className="col-auto ps-5">
      <h4>Enter Book Name :<input type='text'className="form-control forfont" value={data.Book} style={{width:"570px"}}onChange={(e)=>{
        setData({...data,Book:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book id :<input type='text'className="form-control forfont" value={data.id} style={{width:"570px"}}onChange={(e)=>{
        setData({...data,id:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book author :<input type='text'className="form-control forfont" value={data.author} style={{width:"570px"}}onChange={(e)=>{
        setData({...data,author:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book link :<input type='text'className="form-control forfont" value={data.link} style={{width:"570px"}}onChange={(e)=>{
        setData({...data,link:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book price :<input type='text'className="form-control forfont" value={data.price}style={{width:"570px"}}onChange={(e)=>{
        setData({...data,PRICE:e.target.value})
      }} /></h4>
      </div></div>
       
        <button className='btn  ms-5 hoverbu'style={{backgroundColor:'white',color:'black',border:'2px solid blue',width:'120px'}}onClick={() => {
          fetch("http://localhost:8000/Book/" + id,
            {
              method: "PATCH",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then(
              (res) => {
                navigate("/Book")
              }
            )
            
          }} >Submit</button>
      </div>
    </>
  )
}

export default Update;
