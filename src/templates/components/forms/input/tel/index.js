import { h } from 'preact';

const TelInput = ({
    id,
    name,
    value,
    type = 'tel',
    inputmode = 'tel',
    className,
    autocomplete,
    ariaInvalid,
    required,
    disabled,
    readonly,
    list,
    placeholder,
    maxlength,
    minlength,
    size,
    pattern,
    ariaLabel,
    dataAttributes
}) => <input
    class={`input${className ? ` ${className}` : ''}`}
    type={type}
    id={id}
    name={name}
    value={value}
    inputmode={inputmode}
    aria-label={ariaLabel}
    autocomplete={autocomplete}
    aria-invalid={ariaInvalid}
    required={required}
    placeholder={placeholder}
    list={list}
    maxlength={maxlength}
    minlength={minlength}
    size={size}
    pattern={pattern}
    disabled={disabled}
    readonly={readonly}
    {...dataAttributes}
/>;

export default TelInput;