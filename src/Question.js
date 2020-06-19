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


    const submit = (e) => {
        e.preventDefault();
        if (goodAns === odp) {
            props.updateCounter(10);
            setOdp('');
            setTableCounter(prevState=>prevState+1);
        } else {
            alert('zła odpowiedź');
            props.updateCounter(-3);
            setOdp('');
            setTableCounter(prevState=>prevState+1);
        }
        
        if (tableCounter +1 === tableLength) {

            endOfGame();
            alert('koniec gry!');
            setTableCounter(0);
            return;
        } else {
            startCounting();
        }
       
    }

    return (
            <div className={`singleQuest ${(props.item === letTab) ? "" : "hidden"}`} >
                <form onSubmit={submit} className="innerQuestion">
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

    //let, bo ten nieszczęsny counter się zmienia
    

    //zmienne związane z Timerem:
    const timeCounter = props.timeCounter;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const setTimerActive = props.setTimerActive;
    const startCounting = props.startCounting;

    return (
    <div className={`${props.isQuestion ? 'component' : 'hidden'} 
                        ${isFinished ? "hidden" : ""}`}>    
        <div className='component questions'>
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
                    />
            ))}
        </div>

        <Counter counter={pointCounter} />
        <Timer 
            timeCounter={timeCounter}
            setTimeCounter={setTimeCounter}
            isTimerActive={isTimerActive}
            isFinished={isFinished}
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
            />

        </>
    )
}

export default Question;
