import React, {useState} from 'react';

const SingleQuest = (props) => {
    const [odp, setOdp] = useState('');

    const goodAns = props.item.answer;

    const setTabCounter = props.setTab;
    let letTab = props.letTab;
    
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
}

const Counter = (props) => {

    return (
    <h1 className='component'>wynik: {props.counter}</h1>
    )
}

const AllQuests = (props) => {
   
    const [counter, setCounter] = useState(0);

    const [tableCounter, setTableCounter] = useState(0);
    let firstTableEl = props.items[tableCounter];
    //let, bo ten nieszczęsny counter się zmienia

    const updateCounter = (number) => {
        setCounter(prevState => prevState + number);
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
                    />
            ))}
        </div>

        <Counter counter={counter} />
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
