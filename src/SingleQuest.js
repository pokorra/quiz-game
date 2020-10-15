import React, {useState} from 'react';

const SingleQuest = ({key, item, updateCounter, letTab, setTableCounter, 
    tableCounter, setTimerActive, startCounting, 
    tableLength, endOfGame}) => {

    const [odp, setOdp] = useState('');

    const goodAns = item.answer;


    const submit = (e) => {
        e.preventDefault();
        if (goodAns.toLowerCase() === odp.toLowerCase()) {
            updateCounter(10);
            setOdp('');
            setTableCounter(prevState=>prevState+1);
        } else {
            setTimerActive(false);
            setVisible(true);
            updateCounter(-3);
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
            <div className={`singlequest ${(item === letTab) ? "" : "hidden"}`} >
                <div className={`${visible ? "pop-up" : "hidden"}`}>
                    <h1>ZŁA ODPOWIEDŹ </h1>
                    <p>dobra odpowiedź to: {goodAns}</p>
                    <p>tracisz 3 punkty</p>
                    <button onClick={backToGame}>wróć do gry</button>
                </div>
                <form onSubmit={submit}>
                <label>
                    {item.question}
                    <input
                    type='text'
                    key={key}
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

export default SingleQuest;