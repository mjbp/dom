import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import Form from '@components/forms/form';
import Fieldset from '@components/forms/fieldset';
import InputRow from '@components/forms/row';
import Legend from '@components/forms/legend';
import TextInput from '@components/forms/input/text';
import Checkbox from '@components/forms/input/checkbox';
import Radio from '@components/forms/input/radio';
import CheckboxGroup from '@components/forms/checkbox-group';
import RadioGroup from '@components/forms/radio-group';

export const title = 'Kitchen sink';


const KitchenSinkPage = () => <DefaultLayout section={'Kitchen sink'}>
    <Form>
        <Fieldset>
            <Legend>Your details</Legend>
            <InputRow
                id={'name'}
                label={'Name'}
            >
                <TextInput />
            </InputRow>
        </Fieldset>
        <Fieldset>
            <Legend>Your notification preferences</Legend>
            <CheckboxGroup
                legend={'Types'}
                name={'notification-types'}>
                <Checkbox id={'email'} label={'Email'} />
                <Checkbox id={'tel'} label={'Telephone'} />
                <Checkbox id={'sms'} label={'SMS'} />
            </CheckboxGroup>
            <RadioGroup
                legend={'Frequency'}
                name={'notification-frequency'}>
                <Radio id={'daily'} label={'Daily'} />
                <Radio id={'weekly'} label={'Weekly'} />
            </RadioGroup>
        </Fieldset>
    </Form>
</DefaultLayout>;

export default KitchenSinkPage;