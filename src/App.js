import { PropaneSharp } from '@mui/icons-material';
import React, { useState }  from 'react';
import './App.css';
import List from "./component/List"
import  "./image.svg";


function App() {
  
  const[text,setText] = useState("");
  const[items,setItems] = useState([]);

  function updateText(event){
   const newValue = event.target.value;
   setText(newValue);
  }

  function addItems(){
    setItems(items => {
      return [...items,text];
    });
    setText("")
     
  }

 function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
    }

  function editItem( id) {
    setItems(
      items.map(items => {
          if(items.id=== id) {
            return {...items, id}
          }
          return prompt("Please Enter Your Name:");
        }) 
        )
      }
      function deleteAll(id){
        setItems(prevItems => {
          return prevItems.filter((items, index) => {
            return setText("");
        });
      });
    }
 
    
  return (
    <div className='part1'>
        <h1>TO Do List</h1>
        <input  className="input" onChange = {updateText} type="text" placeholder='Enter Your Name' value={text}></input>
        <button className="btn" onClick={addItems}>Add</button>  
   
      <div className='magic'>
        {items.length >0 ? (
          <ul>{items.map ((listItem,index) => (
          <List
          key = {index}
          id = {index}
          text = {listItem}
          onChecked={deleteItem}
          onEdit={editItem}
          />
         
   ))}
        <button className="btn3" onClick={deleteAll}>Delete All</button>
         </ul> ): (<img className="image" src="https://todo-app.erfjs.com/static/media/empty.c73c3c1281547d8e56d1a55dd92a682b.svg" alt='image'/>)
        }
      
      </div>
    </div>  
  );
         }

export default App;