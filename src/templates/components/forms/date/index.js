import { h } from 'preact';
import Fieldset from '@components/forms/fieldset';
import Legend from '@components/forms/legend';
import Field from '@components/forms/field';
import NumberInput from '@components/forms/input/number';

const Date = ({
    error,
    legend,
    hint,
    day,
    month,
    year,
    disabled
}) => <Fieldset className={'date'}>
    <Legend class="date__legend">
        {/* <span class="legend__text">{legend}</span>
        {hint && <span class="legend__hint date__hint">{hint}</span>}
        {error && <span class="error-message">{error}</span>} */}
    </Legend>
    {/* <Field
        id={day.id}
        className="date__element date__element--day"
        label={'day'}>
    
    </Field> */}

    {day && <div class="date__element date__element--day">
        <label class="label date__element-label" for={day.id}>Day</label>
        <input
            class={`input date__input${error || day.error ? ' input--error' : ''}`}
            id={day.id}
            value={day.value}
            name={day.name}
            aria-invalid={day.error ? 'true' : 'false'}
            pattern="[0-9]*"
            disabled={disabled || day.disabled}
            type="number" />
    </div>}
    {month && <div class="date__element date__element--month">
        <label class="label date__element-label" for={month.id}>Month</label>
        <input
            class={`input date__input${error || month.error ? ' input--error' : ''}`}
            id={month.id}
            value={month.value}
            name={month.name}
            aria-invalid={month.error ? 'true' : 'false'}
            pattern="[0-9]*"
            disabled={disabled || month.disabled}
            type="number" />
    </div>}
    {year && <div class="date__element date__element--year">
        <label class="label date__element-label" for={year.id}>Year</label>
        <input
            class={`input date__input${error || year.error ? ' input--error' : ''}`}
            id={year.id}
            value={year.value}
            name={year.name}
            aria-invalid={year.error ? 'true' : 'false'}
            pattern="[0-9]*"
            disabled={disabled || year.disabled}
            type="number" />
    </div>}
</Fieldset>;

export default Date;