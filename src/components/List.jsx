import CardDefault from "./Card"
import "./list.css"
function List({movies}) {
  return (
    <div id="div" style={{display:"flex",justifyContent:"center" , padding:"50px",flexWrap:"wrap"}}>
        {movies.map((e,i)=>{
        return   <div key={i}><CardDefault movie={e}/></div>
        })
        }
      
    </div>
  )
}

export default List
