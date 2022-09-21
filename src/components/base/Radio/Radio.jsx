import React from 'react';

const Radio = (props) => {
  return (
		<div className="radio" >
			<label className="radio__label" htmlFor={props.id}>{props.label}</label>
			<input
				className="radio__button"
				type="radio"
				id={props.id}
				value={props.label.toLowerCase()}
				name={props.name}
				onChange={props.onChange}
			/>
		</div>
  )
}
export default Radio;
