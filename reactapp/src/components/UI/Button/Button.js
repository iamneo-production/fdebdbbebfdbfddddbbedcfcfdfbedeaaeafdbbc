import React from 'react'




const Button = (ButtonProps) => {
    return (<button onClick = {ButtonProps.onClick}>{ButtonProps.children}</button>);
}

export default Button;