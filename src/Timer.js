import React, {useState, useEffect} from 'react';

const Timer = (props) => {
    const timeCounter = props.timeCounter;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const isFinished = props.isFinished;
//początek pop-up:
    const [visible, setVisible] = useState(false);
    const setTableCounter = props.setTableCounter;
    const startCounting = props.startCounting;
    
    const backToGame = () => {
        setVisible(false);
        setTableCounter(prevState => prevState+1);
        startCounting();
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
            console.log(timeCounter);
        // } else if (!isTimerActive) {
        //     clearInterval(interval);
        //     console.log(timeCounter);
        }
        return () => clearInterval(interval);
       
    }, [isTimerActive, timeCounter]);

    
    return (
        <div className='timer'>
            <div className={`${visible ? "pop-up" : "hidden"}`}>
                <h1>KONIEC CZASU </h1>
                <button onClick={backToGame}>wróć do gry</button>
                </div>
            <h2 className=''> czas: {timeCounter} </h2> 
            <div className='time-flowing time-one'> </div>
            <div className='time-flowing time-two'> </div>
            <div className='time-flowing time-three'> </div>
            
        </div>
        
    )
}

export default Timer;