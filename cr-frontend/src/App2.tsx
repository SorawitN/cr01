import React from 'react';
import { useState } from 'react';

type App2Props = {
    message?: string;
};

const App2 = (props: App2Props) => {
    const [counter, setCounter] = useState<number>(0);

    const incCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            {props.message ? props.message : "nothing here"}
            <br/>
            Counter = {counter}
            <br/>
            <button onClick={incCounter}>incCounter</button>
        </div>
    );
};

export default App2;