import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    console.log(props);
    return (
        <button
            style={{ backgroundColor: props.bgColor }}
            onClick={(evt) => {
                props.onButtonClicked("Un truc à afficher");
            }}
            className={styles.Button}
        >
            {props.children}
        </button>
    );
};

export default Button;
