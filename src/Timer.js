import React, {useState, useEffect} from 'react';

const Timer = (props) => {
    // const isActive = props.isActive
    // const setActive = props.setActive;
    // const counter = props.counter;
    // const setCounter = props.setCounter;
    // const toggle = props.toggle;
    
    const timeCounter = props.timeCounter;
    const setTimeCounter = props.setTimeCounter;
    const isTimerActive = props.isTimerActive;
    // const setTimerActive = props.setTimerActive;
    // const startCounting = props.startCounting;

    
    useEffect(() => {
        let interval = null;
        if (isTimerActive && timeCounter > 0) {
            interval = setInterval(() => {
                setTimeCounter(prevState => prevState -1);
            }, 1000);
        // } else if ( !isTimerActive && timeCounter !== 0 ) {
        //     clearInterval(interval);
        //     setTimeCounter(15);
        //     console.log('nieaktywny');
        } else if (isTimerActive && timeCounter === 0) {
            clearInterval(interval);
            alert('koniec czasu');
            // nowe pytanie!
        }

        return () => clearInterval(interval);
        
    }, [isTimerActive, timeCounter]);

    // console.log(timeCounter);
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