import { h } from 'preact';

const TextInput = ({
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
    list,
    maxlength,
    minlength,
    placeholder,
    size,
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
    autocomplete={autocomplete}
    autofocus={autofocus}
    aria-invalid={ariaInvalid}
    required={required}
    pattern={pattern}
    disabled={disabled}
    inputmode={inputmode}
    list={list}
    maxlength={minlength}
    minlength={maxlength}
    placeholder={placeholder}
    size={size}
    spellcheck={spellcheck}
    readonly={readonly}
    {...dataAttributes}
/>;

export default TextInput;