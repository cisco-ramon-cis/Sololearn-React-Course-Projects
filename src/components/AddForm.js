import React from 'react'
import {useState} from 'react'


const AddForm = () => {
    const [sum,setSum] = useState(0);
    const [num, setNum] = useState(0);

    function handleChange(e) {
        setNum(e.target.value);
    }
    function handleSubmit(e){
        setSum(sum + Number(num));
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="number" value={num} onChange={handleChange} />
        <br/>
        <input type="submit"  value="Add" className='btn' />
        <p> Sum is {sum}</p>
    </form>
  )
}

export default AddForm
