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
    dataAttributes
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
        {...dataAttributes}
    />
</div>;

export default Radio;