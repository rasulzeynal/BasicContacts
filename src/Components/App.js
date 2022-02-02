import { Component } from 'react';
import Contacts from './Contacts';

class App extends Component {
  state={
    contacts: [{
        name:"Rasul Zeynalov",
        phone: "+994507345063"
    },{
        name: "Tarlan Gafarov",
        phone: "+994512017035"
    }]
};

addContact = (contact) => {
  const { contacts} = this.state
  contacts.push(contact);

this.setState({
  contacts
})
}
render(){
  return (
    <div className="App">
     <Contacts contacts={this.state.contacts} addContact={this.addContact}/>
    </div>
  );
}
  
}

export default App;
