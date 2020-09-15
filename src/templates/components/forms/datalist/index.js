import { h } from 'preact';

const Datalist = ({
    disabled,
    id,
    children
}) => <datalist id={id}>{children}</datalist>;

export default Datalist;