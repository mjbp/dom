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
    children,
    ...props
}) => <form
    id={id}
    class={className}
    action={action}
    method={method}
    novalidate={novalidate}
    {...props}>
    {children}
</form>;

export default Form;