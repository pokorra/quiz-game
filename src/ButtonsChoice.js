import React, {useState} from 'react';

const ButtonsChoice = (props) => {
    const [category, setCategory] = useState('');

    const values = {
        HDM: 'HisDarkMaterials',
        HP: 'HarryPotter'
    }
    const choice1 = () => {
        props.updateCategory('HisDarkMaterials');
    }

    const choice2 = () => {
        props.updateCategory('HarryPotter');
    }
    // jak złapać value z buttona??? 
    //zakomentowany bo nie działa, docelowo dobrze żeby działało w jednej funkcji
    // const choice = (e) => {
    //     // setCategory(value);
    //     console.log(e.name);
        
    //     console.log(category);
    //     // props.updateCategory(category);
    // }

    return (
        <div className='component'>
            <button onClick={choice1} name={values.HDM}>HDM</button>
            <button onClick={choice2} value={values.HP}>HP</button>
        </div>
    )
}

export default ButtonsChoice;