import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick: (event: any) => void;
    color?: string;
    size?: 'small' | 'large';
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {

    return <> 
    <button onClick={props.onClick} className="button-container button-primary">
        {props.children}
    </button>
    </>;
};