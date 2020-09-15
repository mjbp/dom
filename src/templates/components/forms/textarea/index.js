import { h } from 'preact';

const Textarea = ({
    id,
    name,
    rows,
    autocomplete,
    autofocus,
    ariaInvalid,
    className,
    disabled,
    required,
    readonly,
    placeholder,
    maxlength,
    minlength,
    spellcheck,
    ariaLabel,
    children
}) => <textarea
    id={id}
    name={name}
    rows={rows}
    aria-label={ariaLabel}
    autocomplete={autocomplete}
    autofocus={autofocus}
    class={`textarea${className ? ` ${className}` : ''}`}
    aria-invalid={ariaInvalid}
    disabled={disabled}
    required={required ? 'required' : false}
    maxlength={maxlength}
    minlength={minlength}
    spellcheck={spellcheck}
    placeholder={placeholder}
    readonly={readonly}>
    {children}
</textarea>;

export default Textarea;