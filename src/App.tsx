import React, { useState } from 'react';
import './App.css';
import {SelectorContainer} from "./Components/SelectorContainer";
import {ScaleForm} from "./Components/ScaleForm";

const App: React.FC = () =>  {
    const [sumValues, setSumValues] = useState<number>(0);
    const [secureLevel, setLevel] = useState<string>("")


  return (
    <div className="App">
     <SelectorContainer setSumValues={setSumValues} sumValues={sumValues} setLevel={setLevel}/>
        {secureLevel && <div className="content_block">
        <b>Уровень защищённости информации - {secureLevel}</b>
            <ScaleForm secureLevel={secureLevel}/>
        </div>}
    </div>
  );
}

export default App;
