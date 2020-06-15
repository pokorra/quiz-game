import React from 'react';

const Hello = (props) => {

    const isHello = props.isHello;
    return (
        <div className={`hello ${(isHello) ? "hidden" : ""}`}> 
        zgadywanka
    </div>
    )
}

// po kliknięciu na buttChoice zwija się do góry
//{className={`singleQuest ${(props.item === letTab) ? "" : "hidden"}`}

export default Hello;