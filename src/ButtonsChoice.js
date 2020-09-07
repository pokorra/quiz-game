import React from 'react';
import Hello from './Hello';

const ButtonsChoice = (props) => {
    const toggle = props.toggleButton;
    const startCounting = props.startCounting;
    const setCategory = props.setCategory;
    const isFinished = props.isFinished;
    const isHello = props.isHello;
    const setHello=props.setHello;
    const setPointCounter = props.setPointCounter;
    const setTimeCounter = props.setTimeCounter;
    const btnChoiceField = props.btnChoiceField;

    const values = {
        Kosmos: 'Kosmos',
        JS: 'JS',
        HDM: 'HisDarkMaterials',
        Animals: 'Animals'
    };
   
    const choice = (e) => {
        setCategory(e.target.name);
        toggle();
        startCounting();
        setPointCounter(0);
        setTimeCounter(20);
    }

    return (
        <div className={`buttons-choice ${isFinished ? "hidden-button" : ""} `}>
            <Hello isHello={isHello} setHello={setHello}/>
            <div className ={`choice ${btnChoiceField ? "short-field" : "long-field"}`}>
                <p>Wybierz kategorię: </p>
                <div className={`${btnChoiceField ? "" : "cat-container"}`}> 
                <button onClick={choice} name={values.Kosmos}>Kosmos</button>
                <button onClick={choice} name={values.JS}>Front-end</button>
                {/* <button onClick={choice} name={values.HDM}>Mroczne materie</button> */}
                <button onClick={choice} name={values.Animals}>Zwierzęta</button>
                </div>
            </div>
        </div>
    )
}

export default ButtonsChoice;