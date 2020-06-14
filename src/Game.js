import React, {useState} from 'react';

import Question from './Question';
// import Choice from './Choice'; - niepotrzebne, jeśli będą buttony
import data from './questionData';
import './Game.css';
import ButtonsChoice from './ButtonsChoice';

const Game = () => {
    const [category, setCategory] = useState('Waiter');
    const updateCategory = (name) => {
        setCategory(name);
    }

    return (
        <>
            {/* <Choice updateCategory={updateCategory}/> */}
            <ButtonsChoice updateCategory={updateCategory}/>
            <Question quest={data[category]} className='component'/>
            
        </>
    )
}

export default Game;