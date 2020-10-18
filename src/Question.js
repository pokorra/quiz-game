import React, {useState} from 'react';
import SingleQuest from './SingleQuest';
import Counter from './Counter';
import Timer from './Timer';



const Question = ({items, pointCounter, setPointCounter, isQuestion, setTimeCounter, isTimerActive,
                    setTimerActive, startCounting, timeCounter, setFinished, isFinished,
                    endOfGame, setTableLength}) => {

    // const items = data[category];
   //zmienne związane z komponentem Counter
    const updateCounter = (number) => {
        setPointCounter(prevState => prevState + number);
    }

    //zmienne zw. z SingleQuestem:
    const [tableCounter, setTableCounter] = useState(0);
    let firstTableEl = items[tableCounter];
    const tableLength = items.length;
    setTableLength(tableLength);

    //do Timera przekazać propsy bez modyfikacji

    return (
    <div className={`${isQuestion ? 'question-container' : 'hidden'} 
                        ${isFinished ? "hidden" : ""}`}>    
        <div className='questions'>
            {items.map(item => (
                <SingleQuest 
                    key={item.id} 
                    item={item} 
                    updateCounter={updateCounter}
                    letTab={firstTableEl}
                    setTableCounter={setTableCounter}
                    tableCounter={tableCounter}
                    setTimerActive={setTimerActive}
                    startCounting={startCounting}
                    tableLength = {tableLength}
                    endOfGame={endOfGame}
                    />
            ))}
        </div>

        <Counter counter={pointCounter} />
        <Timer 
            timeCounter={timeCounter}
            setTimeCounter={setTimeCounter}
            isTimerActive={isTimerActive}
            isFinished={isFinished}
            setTableCounter={setTableCounter}
            startCounting={startCounting}
            tableCounter={tableCounter}
            tableLength={tableLength}
            endOfGame={endOfGame}
            />
    </div>
    )
}

export default Question;