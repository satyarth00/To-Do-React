function ItemLists({ todoName, todoDate,onDeleteClick }) {
    return   <div className="container applist1">
    <div className="row">
            <div className="col-4">{todoName}</div>
            <div className="col-4">{todoDate}</div>
     <div className="col-2"><button type="button" className="btn btn-danger delete-button" onClick={()=>onDeleteClick(todoName)}>Delete</button></div> 
        </div>
        </div>
}
export default ItemLists;