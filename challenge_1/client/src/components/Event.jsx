import React from 'react';
import axios from 'axios';

class Event extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  isEditing: false,
  	  date: '',
  	  description: '',
  	};
  	this.handleClick = this.handleClick.bind(this);
  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
  	if (this.state.isEditing) {
  	  return (
  	  	<div>
  	  	  Description
  	  	  <div>
            <textarea 
              defaultValue={this.props.event.description} 
              onChange={this.handleChange} 
              id="description" 
              rows="20" 
              cols="50">           
            </textarea>
          </div>
          <div>
            Date
          </div>
            <textarea 
              onChange={this.handleChange} 
              id="date" defaultValue={this.props.event.date}>             
            </textarea>
          <div>
            <button onClick={this.handleClick} type="button">Back</button>
            <button type="submit">Save Info</button>
          </div>  
        </div>  
  	  );
  	}

  	return (
      <div>
        <p>
          Date: {this.props.event.date}
          <button onClick={this.handleClick} type="button">Edit Info</button>
        </p>
        <p>Description: {this.props.event.description}</p>
      </div>
  	);
  }
}

export default Event;