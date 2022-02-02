import React from 'react';
import Form from './Form';
import List from './List';
import PropTypes from 'prop-types'

const  Contacts = (props) => {

        return (
            <div>
                <List contacts={props.contacts} />
                <Form addContact={props.addContact}/>
            </div>
        )
    }

Contacts.propTypes={
        contacts:PropTypes.array.isRequired,
        addContact: PropTypes.func
      }
export default Contacts;