import { h } from 'preact';

const Legend = ({
    className,
    children
}) => <legend class={`legend${className ? ` ${className}` : ''}`}>
    {children}
</legend>;

export default Legend;

