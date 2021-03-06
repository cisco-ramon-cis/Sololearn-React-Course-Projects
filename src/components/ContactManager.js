import React from 'react'
import { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'

const ContactManager = (props) => {
    const [contacts, setContacts] = useState(props.data)

    function addPerson(name) {
        setContacts([...contacts, name]);
    }

    return (
        <div>
            <AddPersonForm  handleSubmit={addPerson}/>
            <PeopleList data = {contacts} />
        </div>
    )
}

export default ContactManager
