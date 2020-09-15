import { h } from 'preact';
import Label from '@components/forms/label';

const Checkbox = ({
    id,
    name,
    value,
    checked,
    className,
    label,
    ariaLabel,
    required,
    dataAttributes
}) => <div class="checkbox">
    {label && <Label className={'checkbox__label'} htmlFor={id}>{label}</Label>}
    <input
        type={'checkbox'}
        class={`checkbox__input${className ? ` ${className}` : ''}`}
        id={id}
        name={name}
        value={value}
        checked={checked}
        required={required}
        aria-label={ariaLabel}
        {...dataAttributes}
    />
</div>;

export default Checkbox;