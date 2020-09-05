import React from 'react';

const Finish = (props) => {
    const isFinished = props.isFinished;

    const newStart = props.newStart;
    const pointCounter = props.pointCounter;
    const tableLength = props.tableLength*10;

    const onceMoreToggle = () => {
        newStart();
    }
    return (
        <div className={`${isFinished ? "finished" : "hidden"} `}>
            <h2>koniec gry!</h2>
            <h1>{`udało ci się zdobyć ${pointCounter} punktów na ${tableLength} możliwych! gratulacje!`}</h1>
            <p>niech każdy w skrytości serca oceni, czy to dobry wynik, 
                i czy można coś jeszcze poprawić. ja ze swojej strony mogę podziękować za wyśmienitą zabawę xd</p>
            <button onClick={onceMoreToggle}>zagraj jeszcze raz</button>
        </div>
    )
};

export default Finish;