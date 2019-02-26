import React, {Component} from "react";

class Form extends Component{
  constructor(props){
    super(props);

    this.state = {
      name : '',
      job : ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name] : value
    })
  }

  render() {
    const { name, job } = this.state; 

    return (
      <form className="form">
        <label>Name</label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={this.handleChange} />
        <label>Job</label>
        <input 
            type="text" 
            name="job" 
            value={job} 
            onChange={this.handleChange}/>
      </form>
    );
  }
}

export default Form;