import React, {useState} from 'react';

import ButtonsChoice from './ButtonsChoice';
import Question from './Question';
import Finish from './Finish';
import data from './questionData';
import './Game.scss';


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

// tu licznik punktów, który trzeba było tu wynieść, żeby się resetował
    const [pointCounter, setPointCounter] = useState(0);
//tu ustawiam licznik czasu
    const [timeCounter, setTimeCounter] = useState(15);
    const [isTimerActive, setTimerActive] = useState(false);
    const startCounting = () => {
        setTimerActive(true);
        setTimeCounter(15);
    }
    //setCounter ustawia counter na 15, setActive ustawia counter na 
    //aktywny lub nie, startCounting ustawia setActive na true

    //tu za pomocą klasy rozwijam lub zwijam komponent Finish
    const [isFinished, setFinished] = useState(false);
    const endOfGame = () => {
        setFinished(true);
    }

    const [backToGame, setBackToGame] = useState(true);
    const goBack = () => {
        setBackToGame(false);
    }
    
    const newStart = () => {
        setQuestion(false);
        setHello(false);
        setFinished(false);
        setBackToGame(true);
        setPointCounter(0);
        
    }

    return (
        <div className='game'>
            <ButtonsChoice 
                isHello={isHello} 
                setHello={setHello}
                updateCategory={updateCategory}
                setCategory={setCategory}
                toggleButton={toggleButton}
                setTimerActive={setTimerActive}
                startCounting={startCounting}
                isFinished={isFinished}
                backToGame={backToGame}
                />
            <Question 
                quest={data[category]}
                isQuestion={isQuestion}

                pointCounter={pointCounter} 
                setPointCounter={setPointCounter}

                timeCounter={timeCounter}
                setTimeCounter={setTimeCounter}
                isTimerActive={isTimerActive}
                setTimerActive={setTimerActive}
                startCounting={startCounting}
                // zmienna i funkcja do wyświetlania Finishu
                setFinished={setFinished}
                isFinished={isFinished}
                endOfGame={endOfGame}

                />
            <Finish
                setFinished={setFinished}
                isFinished={isFinished}
                endOfGame={endOfGame}
                backToGame={backToGame}
                goBack={goBack}
                newStart={newStart}
            />
            
        </div>
    )
}

export default Game;