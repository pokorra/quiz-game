import React, {useState} from 'react';

const ButtonsChoice = (props) => {
    const toggle = props.toggleButton;
    const startCounting = props.startCounting;
    // const [category, setCategory] = useState('');
    // zbędne, dopóki nie będzie jednej funkcji na kliknięcie buttonem 

    const values = {
        HDM: 'HisDarkMaterials',
        HP: 'HarryPotter'
    }
    const choice1 = () => {
        props.updateCategory('HisDarkMaterials');
        toggle();
        startCounting();
    }

    const choice2 = () => {
        props.updateCategory('HarryPotter');
        toggle();
        startCounting();
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
        <div className='component'> Wybierz kategorię: 
            <button onClick={choice1} name={values.HDM}>HDM</button>
            <button onClick={choice2} value={values.HP}>HP</button>
        </div>
    )
}

export default ButtonsChoice;