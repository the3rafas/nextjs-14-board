import { DatePicker } from '@tremor/react';
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
export default function FormPropsDateFields({
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
        htmlFor="first-name"
        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <DatePicker id={name} placeholder={placeholder} className="mt-2" />
      {error && <p className="text-red-500">{helperText}</p>}
    </div>
  );
}
