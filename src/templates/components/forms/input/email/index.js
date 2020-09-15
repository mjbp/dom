import { h } from 'preact';

const EmailInput = ({
    id,
    name,
    value,
    type = 'email',
    inputmode = 'email',
    className,
    autocomplete,
    autofocus,
    ariaInvalid,
    required,
    disabled,
    readonly,
    list,
    placeholder,
    maxlength,
    minlength,
    size,
    multiple,
    pattern,
    ariaLabel,
    dataAttributes
}) => <input
    class={`input${className ? ` ${className}` : ''}`}
    type={type}
    id={id}
    name={name}
    value={value}
    aria-label={ariaLabel}
    autofocus={autofocus}
    inputmode={inputmode}
    autocomplete={autocomplete}
    aria-invalid={ariaInvalid}
    required={required}
    placeholder={placeholder}
    list={list}
    maxlength={maxlength}
    minlength={minlength}
    size={size}
    multiple={multiple}
    pattern={pattern}
    disabled={disabled}
    readonly={readonly}
    {...dataAttributes}
/>;

export default EmailInput;