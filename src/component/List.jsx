import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import '../App.css';

function List(props){
    return (
    <div className="lisst">
    <li className="">{props.text}</li>
    <div className="button">
     <button className="btn1" onClick={() => {
        props.onChecked(props.id);}}>  
        <DeleteOutlinedIcon/> </button>
     <button className="btn2"  onClick={() => {
        props.onEdit(props.id);}}> <BorderColorOutlinedIcon /> </button>
    </div>
    </div>
    );
}

export default List