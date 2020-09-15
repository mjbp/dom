import { h } from 'preact';

const Label = ({
    children,
    htmlFor,
    id,
    className
}) => <label id={id} class={`label${className ? ` ${className}` : ''}`} for={htmlFor}>
    {children}
</label>;

export default Label;