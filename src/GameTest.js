import React, {useState} from 'react';

const GameTest = () => {

    const [styles, setStyles] = useState({
        color: "black"
    });

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    const bee = () => {
        console.log("beczy");
        setStyles(prevState => {
            return {
                ...prevState,
                color: randomColor
            }
        });
    }
    return (
        <button onClick={bee} style={styles}>beee</button>
    )
}

export default GameTest;