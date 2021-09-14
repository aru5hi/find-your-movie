import React from 'react';
import './Ribbon.css';

interface RibbonProps {
    color?: string;
}

export const Ribbon: React.FunctionComponent<RibbonProps> = (props) => {
    return <div className="ribbon">
    <div className="label">{props.children}</div> 
  </div>
};

