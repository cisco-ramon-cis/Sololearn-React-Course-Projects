import React from 'react'
import { useState } from 'react'

const AddPersonForm = (props) => {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleSubmit(e) {
        if (person !== '') {
            props.handleSubmit(person);
            setPerson('');
        }
        e.preventDefault();
    }

    return (
        <div className='container-form' >
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Add new contact'
                    onChange={handleChange}
                    value={person} />
                <button type='submit'>Add</button>
            </form>

        </div>
    )
}

export default AddPersonForm
