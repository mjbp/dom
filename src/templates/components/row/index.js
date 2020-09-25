import { h } from 'preact';
const composeClass = (className, single) => `row${className ? ` ${className}` : ''}${single ? ` row--single` : ''}`;

const Row = ({ className, single, children }) => <div class={composeClass(className, single)}>
    {children}
</div>;

export default Row;