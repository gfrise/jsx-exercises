import React from 'react';
import ReactDOM from 'react-dom';

const a = 2;
const b = 3;

function example(a, b) {
    return a + b;    
};

const element = <h2>{example(a, b)}</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(example)

