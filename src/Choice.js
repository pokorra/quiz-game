import React, {useState} from 'react';

const Choice = (props) => {
    const [category, setCategory] = useState('');

    const values = {
        HDM: 'HisDarkMaterials',
        HP: 'HarryPotter'
    }
    const submitChange = (e) => {
        setCategory(e.target.value);
    }
    const submitChoice = (e) =>{
        props.updateCategory(category);
        e.preventDefault();
        
    }
    return (
        <form onSubmit={submitChoice} className='component' id='choice' >
            <label> wybierz kategorię</label>
            <select value={category} id='categories' onChange={submitChange} >
                <option value={values.HDM}> Mroczne Materie </option>
                <option value={values.HP}> Harry Potter</option>
                <option value={values.HDM}> Mroczne Materie </option>
                <option value={values.HP}> Harry Potter</option>      
            </select>
            <button type='submit'> ok</button>
        </form>
    )
}

export default Choice;