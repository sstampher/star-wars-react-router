import React from 'react';

export default function People(props){
    
    return (
        <div id="names">
            {props.names.map((item, idx) => <div id="name"><li key={item}>{item}</li><button onClick={()=>props.onDelete(idx)}>x</button></div>)}      
        </div>
    )
}