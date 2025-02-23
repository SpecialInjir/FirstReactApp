import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const inputClick = () => console.log("Clicked!")
const mouseOver = () => console.log("Mouse moved!")

const helpText ='Random Text'
const elements = (<div className='Name'>
    <h1>{helpText}</h1>
    <input 
    placeholder={helpText}
    onClick={inputClick}
    onMouseEnter={mouseOver}
    />
<p >{helpText ==="net" ? "net": "da"}</p>
</div>)

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(elements)