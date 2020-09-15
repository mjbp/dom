import { h } from 'preact';

const PasswordInput = ({
    id,
    name,
    value,
    type = 'text',
    className,
    autocomplete,
    autofocus,
    ariaInvalid,
    required,
    inputmode,
    pattern,
    disabled,
    readonly,
    maxlength,
    minlength,
    placeholder,
    size,
    ariaLabel,
    dataAttributes
}) => <input
    class={`input${className ? ` ${className}` : ''}`}
    type={type}
    id={id}
    name={name}
    value={value}
    autocomplete={autocomplete}
    autofocus={autofocus}
    aria-invalid={ariaInvalid}
    aria-label={ariaLabel}
    required={required}
    pattern={pattern}
    disabled={disabled}
    inputmode={inputmode}
    maxlength={minlength}
    minlength={maxlength}
    placeholder={placeholder}
    readonly={readonly}
    size={size}
    {...dataAttributes}
/>;

export default PasswordInput;