import React, {useState} from 'react';
import Counter from './Counter';
import Timer from './Timer';

const SingleQuest = (props) => {
    const [odp, setOdp] = useState('');

    const goodAns = props.item.answer;

    const setTabCounter = props.setTab;
    let letTab = props.letTab;

    const startCounting = props.startCounting;

    const submit = (e) => {
        e.preventDefault();
        if (goodAns === odp) {
            props.updateCounter(10);
            setOdp('');
            setTabCounter(prevState=>prevState+1);  
        } else {
            alert('zła odpowiedź');
            props.updateCounter(-3);
            setTabCounter(prevState=>prevState+1);
            setOdp('');
        }
        startCounting();
    }

    return (
        
            <form onSubmit={submit} className={`singleQuest ${(props.item === letTab) ? "" : "hidden"}`} >
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
       
            
    )
};

const AllQuests = (props) => {
   //zmienne związane z komponentem Counter:
    const [pointCounter, setPointCounter] = useState(0);
    const updateCounter = (number) => {
        setPointCounter(prevState => prevState + number);
    }

    //zmienne zw. z SingleQuestem:
    const [tableCounter, setTableCounter] = useState(0);
    let firstTableEl = props.items[tableCounter];
    //let, bo ten nieszczęsny counter się zmienia
    
    // const tableLenght z długością tablicy, żeby, gdy nr pytania będzie większy niż table.length, 

    //zmienne związane z Timerem:
    // const [counter, setCounter] = useState(15);
    // const [isActive, setActive] = useState(false);
    const timeCounter = props.timeCounter;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const setTimerActive = props.setTimerActive;
    const startCounting = props.startCounting;
     //setCounter ustawia counter na 15, setActive ustawia counter na 
    //aktywny lub nie, startCounting ustawia setActive na true

    //do skasowania jeśli dane przekazane z propsa działają
    // const toggle = () => {
    //     setActive(!isActive);
    // } 
    // const startCounting = () => {
    //     setActive(true);
    // }
    
   
    return (
    <div className={props.isQuestion ? 'component' : 'hidden'}>    
        <div className='component questions'>
            {props.items.map(item => (
                <SingleQuest key={item.id} 
                    item={item} 
                    updateCounter={updateCounter}
                    letTab={firstTableEl}
                    setTab={setTableCounter}
                    // toggle={toggle}   
                    // startCounting={startCounting} 

                    timeCounter={timeCounter}
                    setTimeCounter={setTimeCounter}
                    setTimerActive={setTimerActive}
                    startCounting={startCounting}
                    />
            ))}
        </div>

        <Counter counter={pointCounter} />
        <Timer 
            // setCounter={setCounter}
            // counter={counter}
            // setActive={setActive}
            // isActive={isActive}
            // toggle = {toggle}

            timeCounter={timeCounter}
            setTimeCounter={setTimeCounter}
            isTimerActive={isTimerActive}
            setTimerActive={setTimerActive}
            startCounting={startCounting}
            />
    </div>
    )
}


const Question = (props) => {
    const isQuestion = props.isQuestion;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const setTimerActive = props.setTimerActive;
    const startCounting = props.startCounting;
    const timeCounter = props.timeCounter;

    
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
            />

        </>
    )
}

export default Question;
