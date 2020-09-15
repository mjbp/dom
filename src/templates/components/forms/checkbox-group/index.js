import { h, cloneElement } from 'preact';
import Fieldset from '@components/forms/fieldset';
import Legend from '@components/forms/legend';

const CheckboxGroup = ({
    legend,
    name,
    children
}) => <Fieldset className={'checkbox-group'}>
    <Legend className={'checkbox-group__legend'}>{legend}</Legend>
    { children.map(child => cloneElement(child, { ...child.attributes, name }) ) }
</Fieldset>;

export default CheckboxGroup;