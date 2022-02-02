import React, { Component } from 'react';
import PropTypes from 'prop-types';


class List extends Component {
  static propTypes = {
    contacts:PropTypes.array.isRequired
  };

  state = {
    filterText : ''
  };

  onChangeFilterText = (e) => {
     this.setState({
       filterText: e.target.value
     })
  }


    render() {
      //Listde olan adlari lowercase edib filter edirki, icinde 'filterText'  melumati varsa return etsin ,yoxdursa etmesin.
      const filteredContacts=this.props.contacts.filter(
        contact => {
          return ((contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase())) && (contact.phone.indexOf(this.state.filterText))) !== -1
        }
      )
        return (
            <div className="container"> 
            <div className="col-10">
            <input 
            value={this.state.filterText}
            onChange={this.onChangeFilterText}
            type="text"  
            name={"filter"}
            id={"filter"}
            className="form-control mt-4 mb-3" 
            placeholder={"Filter person name or phone"}/>
            <table className="table  table-striped" >
  <thead className="table-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {
      filteredContacts.map(contact =>
        <tr key={contact.phone}>
      <td>{contact.name}</td>
      <td >{contact.phone}</td>
    </tr>
      )
    }
</tbody>
</table>
            </div>
            </div>
        )
    }
}

export default List;