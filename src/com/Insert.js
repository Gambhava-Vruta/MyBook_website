import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function Insert() {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  return <>
 
 <div  className="updatemiddle" style={{height:'200px'}}>Add Book</div>
    <div className="table_class">
      
  <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book Name :<input type='text'className="form-control forfont"  style={{width:"570px"}}onChange={(e)=>{
        setData({...data,Book:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book id :<input type='text'className="form-control forfont"  style={{width:"570px"}}onChange={(e)=>{
        setData({...data,id:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book author :<input type='text'className="form-control forfont"  style={{width:"570px"}}onChange={(e)=>{
        setData({...data,author:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book link :<input type='text'className="form-control forfont"  style={{width:"570px"}}onChange={(e)=>{
        setData({...data,link:e.target.value})
      }} /></h4>
      </div></div>
      <div className="row mt-3">
      
    
      <div className="col-auto ps-5">
      <h4>Enter Book price :<input type='text'className="form-control forfont"style={{width:"570px"}}onChange={(e)=>{
        setData({...data,PRICE:e.target.value})
      }} /></h4>
      </div></div>
      
      <div className="row">
      <div className="col-3">
      <button className='btn  ms-5' style={{backgroundColor:'white',color:'black',border:'2px solid black',width:'120px'}}onClick={()=>{
        fetch("http://localhost:8000/Book",
          {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
              "Content-Type":"application/json"
            }
          }
        )
        .then(
          (res)=>{
            navigate("/Book")
          }
        )
      }} >Submit</button></div>
      <div className="col"><button className='btn  ms-5' style={{backgroundColor:'white',color:'black',border:'2px solid black',width:'120px'}} onClick={()=>{
        navigate('/')
      }}>Back</button></div>
      </div>
      {/* <div className="table_class">
      <form>
      <div className="mb-3 ps-3 pe-3 pt-3" >
     <label ><h4>Book name</h4></label>
     <input type='text'className="form-control" onChange={(e)=>{
        setData({...data,Book:e.target.value})
      }} />
   </div>
   <div className="mb-3 ps-3 pe-3 pt-2" >
     <label><h4>Book id</h4></label>
    <input type='text'className="form-control" onChange={(e)=>{
        setData({...data,id:e.target.value})
      }} />
   </div>
   <div className="mb-3 ps-3 pe-3 pt-2">
     <label><h4>Book author</h4></label>
     <input type='text'className="form-control" onChange={(e)=>{
        setData({...data,author:e.target.value})
      }} />
   </div>
 <div className="mb-3 ps-3 pe-3 pt-2">
   <label><h4>Book image link</h4></label>
  <input type='text'className="form-control" onChange={(e)=>{
        setData({...data,link:e.target.value})
      }} />
  </div>
  <div className="mb-3 ps-3 pe-3 pt-2">
 <button className='btn btn-success m-2'onClick={()=>{
        fetch("http://localhost:8000/Book",
          {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
              "Content-Type":"application/json"
            }
          }
        )
        .then(
          (res)=>{
            navigate('/Book')
          }
        )
      }} >Submit</button>

  </div>
  
</form>

</div>    */}
</div>
  </>
}

  export default Insert;

 