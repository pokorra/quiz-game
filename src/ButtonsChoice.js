import React from 'react';
import Hello from './Hello';

const ButtonsChoice = (props) => {
    const toggle = props.toggleButton;
    const startCounting = props.startCounting;
    const setCategory = props.setCategory;
    const isFinished = props.isFinished;
    const isHello = props.isHello;
    const setHello=props.setHello;

    const values = {
        HDM: 'HisDarkMaterials',
        HP: 'HarryPotter'
    };
   
    const choice = (e) => {
        setCategory(e.target.name);
        toggle();
        startCounting();
        
    }

    //isFinished as well
    return (
        <div className={`component ${isFinished ? "hidden" : ""}`}> 
            <Hello isHello={isHello} setHello={setHello}/>
            <div className="choice">
            <p>Wybierz kategorię: </p>
                <button onClick={choice} name={values.HDM}>Mroczne materie</button>
                <button onClick={choice} name={values.HP}>Harry Potter</button>
            </div>
        </div>
    )
}

export default ButtonsChoice;