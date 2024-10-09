import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAsyncError, useParams } from "react-router-dom";

function Buy(){
    const params = useParams();
    const [Book, setBook] = useState({})
    const navigate=useNavigate()
    useEffect(() => {
        fetch("http://localhost:8000/Book/"+ params.id).
            then(res => res.json()).
            then(res => setBook(res))
    }, [])
    return (<>
    {/* <h1>Hii</h1>  */}
    <div  className="table_class"style={{height:"590px"}}>
        <div className="row">
            <div className="col-4 pt-2 ">
    <img src={Book.link} className="m-3 styleforimage"/></div>
    <div className="col  pt-3"><h3>Book : {Book.Book}</h3>
    <div className="row"><h5>by-{Book.author}</h5>

    </div>
    <div className="row"><h3 className="myprice">Price-₹{Book.price}</h3></div>
    </div>
           
    </div>
         
        
         
<br/>
                <h4 className="ms-3 ">about Book:</h4>
                <p className="ms-3 forfontforgetone">Roland Deschain and his ka-tet are bearing southeast through the forests of Mid-World, the almost timeless landscape that seems to stretch from the wreckage of civility that defined Roland's youth to the crimson chaos that seems the future's only promise. Readers of Stephen King's epic series know Roland well, or as well as this enigmatic hero can be known. .</p>
                   <div className="row">
                 
                  
                    <div className="col-3 ms-4   "><button className="btn hoverbu"style={{backgroundColor:'white',color:'black',border:'2px solid blue',width:'120px'}} onClick={()=>{
                        navigate('/')
                    }}><h5>back</h5></button></div>
                    <div className="col-6 "><button className="btn hoverbu"style={{backgroundColor:'white',color:'black',border:'2px solid blue',width:'120px'}} onClick={()=>{
                        navigate('/')
                    }}><h5>pay</h5></button></div>
                   </div>
              
                       
          
          </div>
    </>)
}
export default Buy;
