import React, {useState} from 'react';
import Hello from './Hello';
import Question from './Question';
// import Choice from './Choice'; - niepotrzebne, jeśli będą buttony
import data from './questionData';
import './Game.css';
import ButtonsChoice from './ButtonsChoice';

const Game = () => {
    const [category, setCategory] = useState('HisDarkMaterials');
    const updateCategory = (name) => {
        setCategory(name);
    }

//tutaj za pomocą klas zwijam komponent przywitalny Hello i rozwijam 
//komponent z właściwą grą - Question
    const [isQuestion, setQuestion] = useState(false);
    const [isHello, setHello] = useState(false);
    const toggleButton = () => {
        setHello(true);
        setQuestion(true);
    } 
//tu ustawiam licznik czasu
    const [timeCounter, setTimeCounter] = useState(15);
    const [isTimerActive, setTimerActive] = useState(false);
    const startCounting = () => {
        setTimerActive(true);
        setTimeCounter(15);
    }
    //setCounter ustawia counter na 15, setActive ustawia counter na 
    //aktywny lub nie, startCounting ustawia setActive na true
    return (
        <div className='game'>
            <Hello isHello={isHello} setHello={setHello}/>
            {/* <Choice updateCategory={updateCategory}/> */}
            <ButtonsChoice 
                updateCategory={updateCategory}
                toggleButton={toggleButton}
                setTimerActive={setTimerActive}
                startCounting={startCounting}
                />
            <Question 
                quest={data[category]}
                isQuestion={isQuestion}

                timeCounter={timeCounter}
                setTimeCounter={setTimeCounter}
                isTimerActive={isTimerActive}
                setTimerActive={setTimerActive}
                startCounting={startCounting}
                // zaczyna liczenie
                />
            
        </div>
    )
}

export default Game;