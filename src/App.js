import React from 'react';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <Game/>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      <div className="twinkle"></div><div className="twinkle"></div>
      
      
    </div>
  );
}

export default App;

//czemu czas nie zatrzymuje się, kiedy kończysz grę? tzn po zmianie kategorii pojawia się "koniec czasu" ;
//trzeba przy kliknięciu na nową kategorię wyzerować wszystko, łącznie z timerem; tzn ustawić timer na 20
