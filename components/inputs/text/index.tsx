import { TextInput } from '@tremor/react';
import * as React from 'react';

type Props = {
  name: string;
  error?: boolean;
  required?: boolean;
  helperText?: string;
  label: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  className?: string;
};
export default function FormPropsTextFields({
  error,
  helperText,
  label,
  placeholder,
  onChange,
  required,
  value,
  className,
  name
}: Props) {
  return (
    <div className={'col-span-full sm:col-span-4 ' + className}>
      <label
        htmlFor={name}
        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <TextInput
        type="text"
        id={name}
        name={name}
        autoComplete={name}
        placeholder={placeholder}
        className="mt-2"
        required
      />
      {error && <p className="text-danger">{helperText}</p>}
    </div>
  );
}
