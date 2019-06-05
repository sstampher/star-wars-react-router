import React, {Component} from 'react';

export default class PersonForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onCreate(e.target.name.value);
    }

    render (){
            return (
                <form id="addName" onSubmit = {this.handleSubmit}>
                    <label>Create a Person</label>
                    <input type="text" name="name" />
                    <button type="submit">Create</button>
                </form>
            )
    }
} 