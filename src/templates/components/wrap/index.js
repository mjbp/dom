import { h } from 'preact';

const Wrap = ({ className, children }) => <div class={`wrap${className ? ` ${className}` : ''}`}>
    {children}
</div>;

export default Wrap;