import React, {Component} from "react";

class Form extends Component{
  constructor(props){
    super(props);

    this.state = {
      name : '',
      job : ''
    }
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.state);
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
        <div className="form-group">
          <label>Name</label>
          <input
              className="form-control"
              type="text" 
              name="name" 
              value={name} 
              onChange={this.handleChange} />
          <label>Job</label>
        </div>
        <div className="form-group">
          <input
              className="form-control"
              type="text" 
              name="job" 
              value={job} 
              onChange={this.handleChange}/>
        </div>
        <input
            className="btn btn-primary"
            type="button" 
            value="Submit" 
            onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;