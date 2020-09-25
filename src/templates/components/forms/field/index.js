import { h, cloneElement } from 'preact';
import Label from '@components/forms/label';

const Field = ({
    id,
    label,
    error = '',
    className,
    children
}) => <div class={`field${className ? ` ${className}` : ''}`}>
    <Label htmlFor={id}>{label}</Label>
    { cloneElement(children, { ...children.attributes, id }) }
    <span class="field__error" data-valmsg-for={id} role="alert">{error}</span>
</div>;

export default Field;