import React from "react";
import PropTypes from 'prop-types'
import styles from "./Button.module.css";

const Button = (props) => {
    console.log(props);
    return (
        <button
            className={styles.Button}
            style={{ backgroundColor: props.bgColor, color: props.color}}
            onClick={(evt) => {
                props.onButtonClicked("Un truc à afficher");
            }}        
            type={props.type}
        >
            {props.children}
        </button>
    );
};
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClicked: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
}
Button.defaultProps={
    onButtonClicked: ()=>{},
    type: 'button',
}
export default Button;
