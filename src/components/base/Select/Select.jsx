import React from 'react';

const Select = (props) => {
	return (
		<label className={`select__label ${props.disabled && 'select__label-disabled'}`} htmlFor={props.name}>
			<span>{props.label}</span>
			<select
				className="select__dropdown"
				id={props.id}
				name={props.name}
				onChange={props.onChange}
				required={props.required ? true : false}
				disabled={props.disabled ? true : false}
				value={props.value}
				>
				<option value={''} disabled hidden>{props.placeholder}</option>
				{props.options.map((option, idx) => (
				<option key={idx} className="select__item" value={option.name}>
					{option.name}
				</option>
				))}
			</select>
		</label>
	)
}

export default Select;