import { h } from 'preact';

const Option = ({
    value,
    disabled,
    selected,
    label,
    children
}) => <option
    value={value}
    disabled={disabled}
    selected={selected}
    label={label}
>{children}</option>;

export default Option;