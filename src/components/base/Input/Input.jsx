import React from 'react';

const Input = (props) => {
  return (
    <label
      className={`input__label ${props.disabled && 'input__label-disabled'}`}
      htmlFor={props.id}>
      <span>{props.label}</span>
      {props.textarea ?  
        <textarea
          className="input__area"
          id={props.id}
          value={props.value}
          aria-required="true"
          placeholder={props.placeholder} 
          onChange={props.onChange}
          name={props.name} 
          rows={6}
          maxLength="250"
          disabled={props.disabled ? true : false}
          required={props.required ? true : false}
        /> :
        <input
          className="input__itself"
          type={props.type}
          id={props.id}
          value={props.value}
          aria-required="true"
          placeholder={props.placeholder} 
          onChange={props.onChange}
          name={props.name}
          disabled={props.disabled ? true : false}
          required={props.required ? true : false}
        />
       }
      <i className={props.icon}></i>
    </label> 
  )
}

export default Input;
