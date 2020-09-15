import { h } from 'preact';

const UrlInput = ({
    id,
    name,
    value,
    type = 'url',
    inputmode = 'url',
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
    spellcheck,
    ariaLabel,
    dataAttributes
}) => <input
    class={`input${className ? ` ${className}` : ''}`}
    type={type}
    id={id}
    name={name}
    value={value}
    aria-label={ariaLabel}
    inputmode={inputmode}
    autocomplete={autocomplete}
    aria-invalid={ariaInvalid}
    required={required}
    placeholder={placeholder}
    list={list}
    maxlength={maxlength}
    minlength={minlength}
    size={size}
    spellcheck={spellcheck}
    pattern={pattern}
    disabled={disabled}
    readonly={readonly}
    {...dataAttributes}
/>;

export default UrlInput;