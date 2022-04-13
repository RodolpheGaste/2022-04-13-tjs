import React from "react";
import "./Button.css";

const Button = (props) => {
    console.log(props);
    return (
        <button
            style={{ backgroundColor: props.bgColor }}
            onClick={(evt) => {
                props.onButtonClicked("Un truc à afficher");
            }}
            className="Button"
        >
            {props.children}
        </button>
    );
};

export default Button;
