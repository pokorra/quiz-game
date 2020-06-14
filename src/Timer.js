import React, {useState, useEffect} from 'react';

const Timer = (props) => {
    const isActive = props.isActive
    const setActive = props.setActive;
    const counter = props.counter;
    const setCounter = props.setCounter;
    const toggle = props.toggle;
    
    // ten toggle w gruncie rzeczy nie jest tu potrzebny, chodzi o klik
    //inicjujący i tyle, bo zatrzymywany będzie onSubmitem z innego komponentu

    // if !isActive - po zastopowaniu nie da się od nowa odliczać
    // czasu na to samo pytanie - więc może disabled?

    const stop = () => {
        setCounter(30);
        setActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive && counter > 0) {
            interval = setInterval(() => {
                setCounter(prevState => prevState -1);
            }, 1000);
        } else if ( !isActive && counter !== 0 ) {
            clearInterval(interval);
            setCounter(30);
            console.log('nieaktywny');
        } else if (isActive && counter === 0) {
            clearInterval(interval);
            alert('koniec czasu');
            // co zrobić, żeby po osiągnięciu 0 nie można było wpisywać odpowiedzi?
           
        }

        return () => clearInterval(interval);
        
    }, [isActive, counter]);

    return (
        <div className='component'>
            <div> zostało {counter} s</div>
            <button onClick={toggle}>
                {isActive ? 'stop' : 'start'}
            </button>
            <button onClick={stop}>zeruj</button>
        </div>
        
    )
}

export default Timer;