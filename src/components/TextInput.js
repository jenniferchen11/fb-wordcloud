import React, { Component } from 'react';
export default class TextInput extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) =>{
    this.props.handleSubmit()
    //alert('Implement request to backend');
  }
  handleChange = (event) => {
    this.props.handleChange(event.target.value)
  }
  
  render() {
    return (
      <form className = "facebook-http-link" onSubmit = {this.handleSubmit}>
        <input className = "field"
          type = "text"
          onChange = {this.handleChange}
        />
        <div className = "space"></div>
        <input className = 'submit' type = 'submit'/>
      </form>
    );
  }
}