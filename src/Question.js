import React, {useState} from 'react';

const SingleQuest = (props) => {
    const [odp, setOdp] = useState('');

    const goodAns = props.item.answer;
    
    const submit = (e) => {
        e.preventDefault();
        if (goodAns === odp) {
            console.log('dobra odpowiedź');
            props.updateCounter(5);
            setOdp(''); //czemu to działa? to niezgodne ze sztuką, ale skuteczne?
            console.log(odp);  
        } else {
            alert('zła odpowiedź');
            console.log(goodAns);
            setOdp('');
        }
    }
    return (
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
    )
}

const Counter = (props) => {

    return (
    <h1 className='component'>wynik: {props.counter}</h1>
    )
}

const AllQuests = (props) => {
    const [counter, setCounter] = useState(0);

    const updateCounter = (number) => {
        setCounter(prevState => prevState + number);
    }

    return (
    <>    
        <div className='component'>
            {props.items.map(item => (
                <SingleQuest key={item.id} item={item} updateCounter={updateCounter}/>
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
