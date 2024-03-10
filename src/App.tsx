import React from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {Setting} from './Setting';


function App() {
    return (
        <div className={s.App}>
            <Counter/>
            <Setting/>
        </div>
    );
}

export default App;
