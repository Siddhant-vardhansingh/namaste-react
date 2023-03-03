import React from 'react'
import ReactDOM from 'react-dom/client'
const heading = React.createElement(
    'h3',
    {id: "title3"},
    "Namaste to all - h3"
)

const heading1 = React.createElement(
    'h1',
    {id: "title1"},
    "Namaste to all - h1"
)

const heading2 = React.createElement(
    'h2',
    {id: "title2"},
    "Namaste to all - h2"
)
const container = React.createElement(
    "div",
    {id: 'container'},
    [heading1, heading2, heading]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
