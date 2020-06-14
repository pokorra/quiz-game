import React, {useState} from 'react';
import Counter from './Counter';
import Timer from './Timer';

const SingleQuest = (props) => {
    const [odp, setOdp] = useState('');

    const goodAns = props.item.answer;

    const setTabCounter = props.setTab;
    let letTab = props.letTab;
    const toggle = props.toggle;
    
    const submit = (e) => {
        e.preventDefault();
        if (goodAns === odp) {
            props.updateCounter(5);
            setOdp(''); //czemu to działa? to niezgodne ze sztuką, ale skuteczne?
            setTabCounter(prevState=>prevState+1);  
        } else {
            alert('zła odpowiedź');
            setTabCounter(prevState=>prevState+1);
            setOdp('');
        }
        toggle();
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

    //zmienne związane z Timerem:
    const [counter, setCounter] = useState(30);
    const [isActive, setActive] = useState(false);
    const toggle = () => {
        setActive(!isActive);
    } 
    
   
    return (
    <>    
        <div className='component questions'>
            {props.items.map(item => (
                <SingleQuest key={item.id} 
                    item={item} 
                    updateCounter={updateCounter}
                    letTab={firstTableEl}
                    setTab={setTableCounter}
                    toggle = {toggle}
                    
                    />
            ))}
        </div>

        <Counter counter={pointCounter} />
        <Timer setCounter={setCounter}
            counter={counter}
            setActive={setActive}
            isActive={isActive}
            toggle = {toggle}
            />
    </>
    )
}


const Question = (props) => {

    return (
        <>
            <AllQuests items={props.quest} />

        </>
    )
}

export default Question;
