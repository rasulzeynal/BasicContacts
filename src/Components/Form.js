import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Form extends Component {
  static propTypes = {
    addContact: PropTypes.func
  }

  state={
    name: '',
    phone: ''
  }

  onChange = (e) => {
   this.setState ({
     [e.target.name] : e.target.value
   })
  }

  onSubmit = (e) => {
  e.preventDefault();
  this.props.addContact({
    ...this.state
  })
  this.setState({
    name: '',
    phone: ''
  })
  }
    render() {
        return (
            <div className="container ">
            <form className="col-10" onSubmit={this.onSubmit}>
            <div className="form-group ">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter a Name" value={this.state.name} onChange={this.onChange} name="name"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter a Phone" value={this.state.phone} onChange={this.onChange} name="phone"/>
            </div>
            <button type="submit" className="btn btn-success btn-lg"  >Add</button>
          </form>
            </div>
        )
    }
}

export default Form;