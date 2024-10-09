import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Getall() {
  const [data, setdata] = useState([])
  const [del, setdel] = useState([])

  const navigation = useNavigate()
  const {id} = useParams()
  useEffect(() => {
    fetch("http://localhost:8000/Book").
      then(res => res.json()).
      then(res => setdata(res))
  }, [del])
  let formateddata = data.map((Book) => {
    return <>

<div className="col-2">
<div class="card Myclass" style={{width: "18rem"}}>
  <img src={Book.link} style={{height:"430px"}}class="card-img-top Image" alt="..."/>
  <div class="card-body">
    <div className="row"><div className="col-2"></div>
    <div className="col-3"><span class="badge badge-success rounded-pill d-inline"><Link to={"/Book/" + Book.id} class="btn btn-primary button">read </Link></span></div>
    <div className="col"><span class="badge badge-success rounded-pill d-inline"><Link to={"/Book/buy/" + Book.id} class="btn btn-primary button">buy </Link></span></div>
    </div>

  </div>
</div>
</div>



    </>
  })

  return (<>

<div className="row">
        {formateddata}
     </div>
    
  </>)

}
export default Getall