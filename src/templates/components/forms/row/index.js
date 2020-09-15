import { h, cloneElement } from 'preact';
import Label from '@components/forms/label';

const InputRow = ({
    id,
    label,
    className,
    children
}) => <div class={`form-row${className ? ` ${className}` : ''}`}>
    <Label htmlFor={id}>{label}</Label>
    { cloneElement(children, { ...children.attributes, id }) }
</div>;

export default InputRow;