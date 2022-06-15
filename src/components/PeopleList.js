import React from 'react'

const PeopleList = (props) => {
    const arr = props.data;
    const listItems = arr.map((val,index) => 
        <li key={index} className="ul1">{val}</li>);
  return (
    <ul className="ul1">
        {listItems}
    </ul>
  )
}

export default PeopleList
