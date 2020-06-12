import React, {useState} from 'react';
import Timer from './Timer';
import Question from './Question';
import Choice from './Choice';
import data from './questionData';
import './Game.css';

const Game = (props) => {
    const [category, setCategory] = useState('HisDarkMaterials');

    const updateCategory = (name) => {
        setCategory(name);
    }

    return (
        <>
            <Choice updateCategory={updateCategory}/>
            <Question quest={data[category]} className='component'/>
            <Timer className='component'/>
        </>
    )
}

export default Game;