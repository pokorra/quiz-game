import React from 'react';

const Hello = (props) => {

    const isHello = props.isHello;
    return (
    <div className={`hello ${(isHello) ? "hidden-hello" : ""}`}> 
        <div className="inner-hello">
            <h1 className="title">QUIZ WIEDZY</h1>
            <p>gra polega na tym, aby w ciągu 20 sekund odpowiedzieć 
            na pytania z wybranej kategorii. sprawdź, co potrafisz!</p>
        </div>
      
    </div>
    )
}

// po kliknięciu na buttChoice zwija się do góry

export default Hello;