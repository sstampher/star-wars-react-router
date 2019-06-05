import {Route, Link, HashRouter as Router} from 'react-router-dom'
import React from 'react';

export default function PersonForm(props){
    return (
        <div id="createPerson">
            <h2>Create a Person</h2>
            <input onClick={()=> props.onCreate} type="submit" value="Create" />
            <input type="text" name="assignee" value=''/>
           
        
        </div>

    )
}