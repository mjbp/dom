import { h } from 'preact';

const HiddenInput = ({
    id,
    name,
    value,
    type = 'hidden',
    autocomplete,
    ariaInvalid,
    required,
    disabled,
    readonly,
    ...props
}) => <input
    type={type}
    id={id}
    name={name}
    value={value}
    autocomplete={autocomplete}
    required={required}
    disabled={disabled}
    readonly={readonly}
    {...props}
/>;

export default HiddenInput;