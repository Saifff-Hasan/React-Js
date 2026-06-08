import React from 'react';
import { createRoot } from 'react-dom/client'

const anotherElement="Saif Hasan"
const reactElement=React.createElement(
    'a',
    {
        href:'http://google.com',
        target: '_blank'
    },
    'click me to visit google',
    anotherElement
);
createRoot(document.getElementById('root')).render(
    reactElement
);
