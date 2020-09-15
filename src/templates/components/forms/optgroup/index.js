import { h } from 'preact';

const Optgroup = ({
    disabled,
    label,
    children
}) => <optgroup
    disabled={disabled}
    label={label}
>{children}</optgroup>;

export default Optgroup;