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
    dataAttributes
}) => <input
    type={type}
    id={id}
    name={name}
    value={value}
    autocomplete={autocomplete}
    required={required}
    disabled={disabled}
    readonly={readonly}
    {...dataAttributes}
/>;

export default HiddenInput;