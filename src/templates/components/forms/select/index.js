import { h } from 'preact';

const Select = ({
    id,
    name,
    value,
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
    ariaLabel,
    dataAttributes,
    children
}) => <select
    class={`input${className ? ` ${className}` : ''}`}
    id={id}
    name={name}
    value={value}
    aria-abel={ariaLabel}
    autofocus={autofocus}
    autocomplete={autocomplete}
    aria-invalid={ariaInvalid}
    required={required}
    size={size}
    disabled={disabled}
    readonly={readonly}
    {...dataAttributes}
>
    {children}
</select>;

export default Select;