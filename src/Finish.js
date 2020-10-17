import React from 'react';

const Finish = ({isFinished, newStart, pointCounter, tableLength}) => {

    const maxPoints = tableLength*10;

    const onceMoreToggle = () => {
        newStart();
    }
    return (
        <div className={`${isFinished ? "finished" : "hidden"} `}>
            <h2>koniec gry!</h2>
            <h3>{`udało ci się zdobyć ${pointCounter} punktów na ${maxPoints} możliwych! gratulacje!`}</h3>
            <p>gratuluję wyniku i zachęcam do pogłębiania wiedzy na najróżniejsze tematy.
                pamiętajcie, wiedza bezużyteczna nie istnieje!
            </p>
            <button onClick={onceMoreToggle}>zagraj jeszcze raz</button>
        </div>
    )
};

export default Finish;