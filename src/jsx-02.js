import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Tom'

function example(name) {
    return <h1>Hello, {name}</h1>
};

const element = (
    <h1>
        {example(name)}
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element);