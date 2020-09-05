import React, {useState} from 'react';
import Counter from './Counter';
import Timer from './Timer';

const SingleQuest = (props) => {
    const [odp, setOdp] = useState('');

    const goodAns = props.item.answer;
    const tableCounter = props.tableCounter;
    const setTableCounter = props.setTableCounter;
    let letTab = props.letTab;
    const startCounting = props.startCounting;
    const tableLength = props.tableLength;
    const endOfGame = props.endOfGame;
    const setTimeCounter = props.setTimeCounter;
    const setTimerActive = props.setTimerActive;


    const submit = (e) => {
        e.preventDefault();
        if (goodAns.toLowerCase() === odp.toLowerCase()) {
            props.updateCounter(10);
            setOdp('');
            setTableCounter(prevState=>prevState+1);
        } else {
            // setTimeCounter(0);
            console.log(tableCounter);
            setTimerActive(false);
            setVisible(true);
            props.updateCounter(-3);
            setOdp('');
            if (tableCounter +1 === tableLength) {
                endOfGame();
                setTableCounter(0);
                return;
            };
            return;
            // setTableCounter(prevState=>prevState+1);
        }
        
        if (tableCounter +1 === tableLength) {
            endOfGame();
            setTableCounter(0);
            return;
        } else {
            startCounting();
        }
       
    }
    //pop-up
    const [visible, setVisible] = useState(false);
    const backToGame = () => {
        setVisible(false);
        setTableCounter(prevState => prevState+1);
        startCounting();
    }

    return (
            <div className={`singlequest ${(props.item === letTab) ? "" : "hidden"}`} >
                <div className={`${visible ? "pop-up" : "hidden"}`}>
                    <h1>ZŁA ODPOWIEDŹ </h1>
                    <p>dobra odpowiedź to: {goodAns}</p>
                    <p>tracisz 3 punkty</p>
                    <button onClick={backToGame}>wróć do gry</button>
                </div>
                <form onSubmit={submit}>
                <label>
                    {props.item.question}
                    <input
                    type='text'
                    name = {goodAns}
                    value={odp}
                    onChange = {e => setOdp(e.target.value)}
                    />
                    <button type='submit'> ok</button>
                </label>
                </form> 
            </div>  
       
            
    )
};

const AllQuests = (props) => {
   //zmienne związane z komponentem Counter:
    
    const pointCounter = props.pointCounter;
    const setPointCounter = props.setPointCounter;
    const updateCounter = (number) => {
        setPointCounter(prevState => prevState + number);
    }

    //zmienne zw. z SingleQuestem:
    const [tableCounter, setTableCounter] = useState(0);
    let firstTableEl = props.items[tableCounter];
    const tableLength = props.items.length;

    const endOfGame = props.endOfGame;
    const isFinished = props.isFinished;

    const setTableLength = props.setTableLength;
    setTableLength(tableLength);

    //zmienne związane z Timerem:
    const timeCounter = props.timeCounter;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const setTimerActive = props.setTimerActive;
    const startCounting = props.startCounting;

    return (
    <div className={`${props.isQuestion ? 'question-container' : 'hidden'} 
                        ${isFinished ? "hidden" : ""}`}>    
        <div className='questions'>
            {props.items.map(item => (
                <SingleQuest key={item.id} 
                    item={item} 
                    updateCounter={updateCounter}
                    letTab={firstTableEl}
                    setTableCounter={setTableCounter}
                    tableCounter={tableCounter}
                   
                    timeCounter={timeCounter}
                    setTimeCounter={setTimeCounter}
                    setTimerActive={setTimerActive}
                    startCounting={startCounting}
                    tableLength = {tableLength}
                    endOfGame={endOfGame}
                    // setTableLength={setTableLength}
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
            // setTimerActive={setTimerActive}
            // startCounting={startCounting}
            />
    </div>
    )
}


const Question = (props) => {

    const pointCounter = props.pointCounter;
    const setPointCounter = props.setPointCounter;

    const isQuestion = props.isQuestion;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const setTimerActive = props.setTimerActive;
    const startCounting = props.startCounting;
    const timeCounter = props.timeCounter;
    const setFinished = props.setFinished;
    const isFinished = props.isFinished;
    const endOfGame = props.endOfGame;
    const setTableLength = props.setTableLength;

    // setTableLength = props.items.length);

    return (
        <>
            <AllQuests 
            items={props.quest} 
            isQuestion={isQuestion} 
            timeCounter={timeCounter}
            setTimeCounter={setTimeCounter}
            isTimerActive={isTimerActive}
            setTimerActive={setTimerActive}
            startCounting={startCounting}
            pointCounter={pointCounter} 
            setPointCounter={setPointCounter}
            isFinished={isFinished}
            setFinished={setFinished}
            endOfGame={endOfGame}
            setTableLength={setTableLength}
            />
        </>
    )
}

export default Question;
