import { h } from 'preact';
import Label from '@components/forms/label';

const Radio = ({
    id,
    name,
    label,
    value,
    checked,
    className,
    ariaLabel,
    ...props
}) => <div class="radio">
    {label && <Label className={'radio__label'} htmlFor={id}>{label}</Label>}
    <input
        type={'radio'}
        class={`radio__input${className ? ` ${className}` : ''}`}
        id={id}
        name={name}
        value={value}
        checked={checked}
        aria-label={ariaLabel}
        {...props}
    />
</div>;

export default Radio;