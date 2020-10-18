import React from 'react';
import Hello from './Hello';

const ButtonsChoice = ({toggleButton, startCounting, setCategory, isFinished, isHello, setHello, setPointCounter, setTimeCounter, btnChoiceField}) => {

    const values = {
        Kosmos: 'Kosmos',
        JS: 'JS',
        HDM: 'HisDarkMaterials',
        Animals: 'Animals'
    };
   
    const choice = (e) => {
        console.log('kliknięto choice');
        setCategory(e.target.name);
        toggleButton();
        startCounting();
        setPointCounter(0);
        // trzeba jeszcze wyzerować nr pytania!;
    }

    return (
        <div className={`buttons-choice ${isFinished ? "hidden" : ""} `}>
            <Hello isHello={isHello} setHello={setHello}/>
            {/* <div className ={`choice ${btnChoiceField ? "short-field" : "long-field"}`}> */}
            <div className ={`choice`}>
                <p>wybierz kategorię: </p>
                {/* <div className={`${btnChoiceField ? "" : "cat-container"}`}>  */}
                <div className="cat-container">
                    <button onClick={choice} name={values.Kosmos}>KOSMOS</button>
                    <button onClick={choice} name={values.JS}>FRONT-END</button>
                    {/* <button onClick={choice} name={values.HDM}>Mroczne materie</button> */}
                    <button onClick={choice} name={values.Animals}>ZWIERZĘTA</button>
                </div>
            </div>
        </div>
    )
}
//czemu służy btnChoiceField?

export default ButtonsChoice;