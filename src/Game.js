import React, {useState} from 'react';

import ButtonsChoice from './ButtonsChoice';
import Question from './Question';
import Finish from './Finish';
import data from './questionData';
import './Main.scss';

const Game = () => {
    const [category, setCategory] = useState('HisDarkMaterials');
    const updateCategory = (name) => {
        setCategory(name);
    }

//tutaj za pomocą klas zwijam komponent przywitalny Hello i rozwijam 
//komponent z właściwą grą - Question
    const [isQuestion, setQuestion] = useState(false);
    const [isHello, setHello] = useState(false);
    const [btnChoiceField, setBtnChoiceField] = useState(false);
    const toggleButton = () => {
        setHello(true);
        setQuestion(true);
        setBtnChoiceField(true);
    } 

// tu licznik punktów, który trzeba było tu wynieść, żeby się resetował
    const [pointCounter, setPointCounter] = useState(0);

//tu ustawiam licznik czasu
    const [timeCounter, setTimeCounter] = useState(20);
    const [isTimerActive, setTimerActive] = useState(false);
    const startCounting = () => {
        setTimerActive(true);
        setTimeCounter(20);
    }
    //setCounter ustawia counter na 15, setActive ustawia counter na 
    //aktywny lub nie, startCounting ustawia setActive na true

    //tu za pomocą klasy rozwijam lub zwijam komponent Finish
    const [isFinished, setFinished] = useState(false);
    const endOfGame = () => {
        setFinished(true);
    }
    const [tableLength, setTableLength] = useState(0);

    const [backToGame, setBackToGame] = useState(true);
    
    const newStart = () => {
        setQuestion(false);
        setHello(false);
        setFinished(false);
        setBackToGame(true);
        setPointCounter(0);
        setBtnChoiceField(false); 
    }

    return (
        <div className='game-container'>
            <ButtonsChoice 
                isHello={isHello} 
                setHello={setHello}
                updateCategory={updateCategory}
                setCategory={setCategory}
                toggleButton={toggleButton}
                setTimerActive={setTimerActive}
                startCounting={startCounting}
                setPointCounter={setPointCounter}
                isFinished={isFinished}
                backToGame={backToGame}
                setTimeCounter={setTimeCounter}
                btnChoiceField={btnChoiceField}
                />
            <Question 
                items={data[category]}
                isQuestion={isQuestion}
                pointCounter={pointCounter} 
                setPointCounter={setPointCounter}
                setTableLength={setTableLength}
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
                pointCounter={pointCounter} 
                isFinished={isFinished}
                newStart={newStart}
                tableLength={tableLength}
            />
            {/* <button className="btn-reset" onClick={newStart}>RESET</button> */}
        </div>
    )
}

export default Game;