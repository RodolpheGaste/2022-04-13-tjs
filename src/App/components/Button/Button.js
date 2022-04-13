import React from 'react'
import './Button.css'

const Button = (props) => {
    console.log(props);
    return <button onClick={(evt) => {
        props.onButtonClicked('Un truc à afficher')
    }
    } className="Button">{props.text}</button>;

}

export default Button;