import { h } from 'preact';

const Fieldset = ({
    children,
    className
}) => <fieldset class={`fieldset${className ? ` ${className}` : ''}`}>
    {children}
</fieldset>;

export default Fieldset;