import { h, cloneElement } from 'preact';
import Fieldset from '@components/forms/fieldset';
import Legend from '@components/forms/legend';

const RadioGroup = ({
    legend,
    name,
    children
}) => <Fieldset className={'radio-group'}>
    <Legend className={'radio-group__legend'}>{legend}</Legend>
    { children.map(child => cloneElement(child, { ...child.attributes, name }) ) }
</Fieldset>;

export default RadioGroup;