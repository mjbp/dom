import { h } from 'preact';

const Form = ({
    action,
    id,
    className,
    method,
    novalidate,
    name,
    autocomplete,
    enctype,
    children
}) => <form
    id={id}
    class={className}
    action={action}
    method={method}
    novalidate={novalidate}>
    {children}
</form>;

export default Form;