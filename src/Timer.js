import React, {useState, useEffect} from 'react';

const Timer = ({timeCounter, setTimeCounter, isTimerActive, isFinished,
                setTableCounter, startCounting, tableCounter, tableLength, endOfGame}) => {

//początek pop-up:
    const [visible, setVisible] = useState(false);

//ostatnie pytanie:
    //  tableCounter, tableLength, endOfGame 
    
    const backToGame = () => {
        setVisible(false);
        setTableCounter(prevState => prevState+1);
        startCounting();
        if (tableCounter +1 === tableLength) {
            endOfGame();
            setTableCounter(0);
        }
    }
    useEffect(() => {
        let interval = null;
         if (isTimerActive && timeCounter > 0) {
            interval = setInterval(() => {
                setTimeCounter(prevState => prevState -1);
            }, 1000);
        } else if (isTimerActive && timeCounter === 0) {
            clearInterval(interval);
            //zmiana stanu w pop-upie
            !isFinished && setVisible(true);
        // } else if (!isTimerActive) {
        //     clearInterval(interval);
        //     console.log(timeCounter);
        }
        return () => clearInterval(interval);
       
    }, [isTimerActive, timeCounter, isFinished, setTimeCounter]);

    
    return (
        <div className='timer'>
            <div className={`${visible ? "pop-up" : "hidden"}`}>
                <h1>KONIEC CZASU </h1>
                <button onClick={backToGame}>wróć do gry</button>
                </div>
            <h2> czas: {timeCounter} </h2> 
        </div>
    )
}

export default Timer;