import AppName from "./component/AppName"
import AppList from "./component/AppList"
import ItemListName from "./component/ItemListName"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import WelcomeMessage from "./component/WelcomeMessage"

function App() {

  
  const [itemListName, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
  const newTodoItems = [...itemListName,
      { Name: itemName, date: itemDueDate },
    ];
    setTodoItems(newTodoItems)
  };

    const handleDeleteItems = (itemName) => {
    const newTodoItems = itemListName.filter(item => item.Name !== itemName)
    setTodoItems(newTodoItems);  
 }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppList onNewItem={handleNewItem}></AppList>
      {itemListName.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ItemListName itemListName={itemListName}  onDeleteClick={handleDeleteItems}></ItemListName>
       </center> 
  )
} 

export default App
