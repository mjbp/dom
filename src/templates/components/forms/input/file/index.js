import { h } from 'preact';

const FileInput = ({
    id,
    name,
    value,
    type = 'file',
    autofocus,
    className,
    autocomplete,
    ariaInvalid,
    required,
    disabled,
    readonly,
    placeholder,
    capture,
    files,
    multiple,
    accept,
    ariaLabel,
    dataAttributes
}) => <input
    class={`input${className ? ` ${className}` : ''}`}
    type={type}
    id={id}
    name={name}
    value={value}
    aria-label={ariaLabel}
    accept={accept}
    capture={capture}
    files={files}
    multiple={multiple}
    autofocus={autofocus}
    autocomplete={autocomplete}
    aria-invalid={ariaInvalid}
    required={required}
    placeholder={placeholder}
    disabled={disabled}
    readonly={readonly}
    {...dataAttributes}
/>;

export default FileInput;