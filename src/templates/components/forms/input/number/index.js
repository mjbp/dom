import { h } from 'preact';

const NumberInput = ({
    id,
    name,
    value,
    type = 'number',
    min,
    max,
    inputmode = 'numeric',
    autofocus,
    className,
    autocomplete,
    ariaInvalid,
    required,
    disabled,
    readonly,
    list,
    placeholder,
    ariaLabel,
    step,
    ...props
}) => <input
    class={`input${className ? ` ${className}` : ''}`}
    type={type}
    id={id}
    name={name}
    aria-label={ariaLabel}
    value={value}
    autofocus={autofocus}
    inputmode={inputmode}
    autocomplete={autocomplete}
    aria-invalid={ariaInvalid}
    required={required}
    step={step}
    min={min}
    max={max}
    placeholder={placeholder}
    disabled={disabled}
    readonly={readonly}
    {...props}
/>;

export default NumberInput;