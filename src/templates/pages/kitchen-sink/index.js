import { h, Fragment } from 'preact';
import DefaultLayout from '@layouts/default';
import Wrap from '@components/wrap';
import Form from '@components/forms/form';
import Fieldset from '@components/forms/fieldset';
import Field from '@components/forms/field';
import Legend from '@components/forms/legend';
import TextInput from '@components/forms/input/text';
import NumberInput from '@components/forms/input/number';
import TelInput from '@components/forms/input/tel';
import UrlInput from '@components/forms/input/url';
import FileInput from '@components/forms/input/file';
import PasswordInput from '@components/forms/input/password';
import Textarea from '@components/forms/textarea';
import Checkbox from '@components/forms/input/checkbox';
import Radio from '@components/forms/input/radio';
import Select from '@components/forms/select';
import Option from '@components/forms/option';
import CheckboxGroup from '@components/forms/checkbox-group';
import RadioGroup from '@components/forms/radio-group';

export const title = 'Kitchen sink';

const KitchenSinkPage = () => <DefaultLayout section={'Kitchen sink'}>
    <Wrap>
        <Form>
            <Fieldset>
                <Legend>Your details</Legend>
                <Field id={'name'} label={'Name'}>
                    <TextInput name={'name'} required={'required'} />
                </Field>
                <Field id={'age'} label={'Age'}>
                    <NumberInput min="0" name={'age'} />
                </Field>
                <Field
                    id={'tel'}
                    label={<Fragment>
                        <span class="label__text">Telephone </span>
                        <span class="label__hint">e.g. 0131 561 1250</span>
                    </Fragment>}>
                    <TelInput name={'tel'} minlength={5} maxlength={10}  />
                </Field>
                <Field id={'website'} label={'Website'}>
                    <UrlInput name={'website'} />
                </Field>
                <Field id={'byline'} label={'Byline'} name={'byline'}>
                    <Textarea name={'byline'} />
                </Field>
                <Field id={'region'} label={'Region'}>
                    <Select name={'region'}>
                        {['Option 1', 'Option 2'].map(region => <Option value={region}>{region}</Option>)}
                    </Select>
                </Field>
                <Field id={'avatar'} label={'Avatar'} >
                    <FileInput name={'avatar'} />
                </Field>
            </Fieldset>
            <Fieldset>
                <Legend>Your preferences</Legend>
                <CheckboxGroup legend={'Notification types'} name={'notification-types'}>
                    <Checkbox id={'email'} label={'Email'} />
                    <Checkbox id={'tel'} label={'Telephone'} />
                    <Checkbox id={'sms'} label={'SMS'} />
                </CheckboxGroup>
                <RadioGroup legend={'Notification frequency'} name={'notification-frequency'}>
                    <Radio id={'daily'} label={'Daily'} />
                    <Radio id={'weekly'} label={'Weekly'} />
                </RadioGroup>
            </Fieldset>
            <Fieldset>
                <Legend>Security</Legend>
                <Field id={'password'} label={'Password'}>
                    <PasswordInput name={'password'} />
                </Field>
                <Field id={'confirm-password'} label={'Confirm password'}>
                    <PasswordInput name={'confirmpassword'} />
                </Field>
            </Fieldset>
            <button>Submit</button>
        </Form>
    </Wrap>
</DefaultLayout>;

export default KitchenSinkPage;