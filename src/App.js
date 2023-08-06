
import './App.css';
import { useState } from 'react';
import ToDoLists from './ToDoList';

function App() {
  const [inputList,setinputList] = useState("");
  const [items,setitems] = useState([]);

    const inputEvent = (event) =>{
      setinputList(event.target.value);
    };

    const listofItems = () => {
    setitems( olditems => {
      return [...olditems,inputList];
    });
    setinputList("")
    };

    const deleteItems = (id) =>{
      console.log("deleted")
      setitems((olditems) => {
        return olditems.filter((arrElem,index) => {
          return index !== id;
         });
        });
    };
      
  return (
    <div className="main_div">
      <div className='center_div'>
      <br/>
      <h1> ToDo List</h1>
      <br/>
      <input type="text" placeholder='Add any items' value={inputList} onChange={inputEvent}/>
      <button id='yes' onClick={listofItems}>+</button>
      <hr></hr>
      <br></br>
<ol>
     {items.map((itemval,index) => {
    return   <ToDoLists 
    id={index}
    key={index}
    text={itemval}
    onSelect={deleteItems}/>
      })
    }
        </ol>
      </div>
    </div>
  );
}

export default App;
