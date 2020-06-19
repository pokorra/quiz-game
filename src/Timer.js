import React, {useEffect} from 'react';

const Timer = (props) => {
    const timeCounter = props.timeCounter;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    const isFinished = props.isFinished;

    
    useEffect(() => {
        let interval = null;
       
        if (isTimerActive && timeCounter > 0) {
            interval = setInterval(() => {
                setTimeCounter(prevState => prevState -1);
            }, 1000);
        } else if (isTimerActive && timeCounter === 0) {
            clearInterval(interval);
            !isFinished && alert('koniec czasu');  
        }

        return () => clearInterval(interval);
       
        
    }, [isTimerActive, timeCounter]);

    return (
        <div className='component'>
            <div> zostało: {timeCounter} s</div>
            {/* <button onClick={toggle}>
                {isActive ? 'stop' : 'start'}
            </button> */}
            {/* <button onClick={stop}>zeruj</button> */}
        </div>
        
    )
}

export default Timer;