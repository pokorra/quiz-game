import React from 'react';

const Finish = (props) => {
    const endOfGame = props.endOfGame;
    const setFinished = props.setFinished;
    const isFinished = props.isFinished;
    const goBack = props.goBack;
    const backToGame = props.backToGame;
    const newStart = props.newStart;

//onceMoreToggle powinien "przywrócić" buttony wyboru kategorii!!!
    const onceMoreToggle = () => {
        newStart();
    }
    return (
        // <div className={`component ${(isFinished || !backToGame) ? "" : "hidden"}`}></div>
        <div className={`component ${isFinished ? "" : "hidden"}`}>
            <h1>udało ci się zdobyć X punktów! gratulacje! </h1>
            <button onClick={onceMoreToggle}>zagraj jeszcze raz</button>
        </div>
    )
};

export default Finish;

// className={`singleQuest ${(props.item === letTab) ? "" : "hidden"}`}