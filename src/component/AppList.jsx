import { useState } from "react"

function AppList({ onNewItem }) {
  
  const [tableName, setTableName] = useState("");
  const [tableDate, setTableDate] = useState("");

  const handleNameChange = (event)=>{
    setTableName(event.target.value)
  }
  const handledateChange = (event)=>{
    setTableDate(event.target.value)
  }
  const handleAddButtonClicked = () => {
    onNewItem(tableName, tableDate)
    setTableDate("");
    setTableName("");
  }

    return <div className="container">
    <div className="row">
    <div className="col-4"> <input type="text" value={tableName} placeholder="enter todo list"onChange={handleNameChange} /></div>
      <div className="col-4"><input type="date" value={tableDate} onChange={handledateChange} /></div>
     <div className="col-2"><button type="button" className="btn btn-success delete-button" onClick={handleAddButtonClicked }>Add</button></div> 
        </div>
        </div>
}

export default AppList