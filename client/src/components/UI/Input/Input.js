import React from 'react';

import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement]

    switch (props.elType){
        case('input'):
            inputElement = <input   
                            className={inputClasses.join(' ')} 
                            {...props.elConfig} 
                            value={props.value}
                            onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                            className={inputClasses.join(' ')} 
                            {...props.elConfig} 
                            value={props.value}
                            onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (<select 
                className={inputClasses.join(' ')} 
                onChange={props.changed} 
                value={props.value}>
                                {props.elConfig.options.map(option => (
                                    <option value={option.value} key={option.value}>{option.displayValue}</option>
                                ))}
                            </select>);
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elConfig} value={props.value}
            onChange={props.changed} />;
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );


}

export default input;