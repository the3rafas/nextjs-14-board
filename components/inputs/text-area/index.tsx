import { TextInput } from '@tremor/react';
import * as React from 'react';
import { classNames } from '../../../libs/utils';

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
export default function FormPropsTextAreaFields({
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
    <div className={'col-span-full sm:col-span-6 ' + className}>
      <label
        htmlFor="first-name"
        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        autoComplete={name}
        placeholder={placeholder}
        className={classNames(
          'w-full flex items-center outline-none rounded-tremor-default px-3 py-2 text-tremor-default focus:ring-2 transition duration-100 border mt-2',
          'shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted',
          'dark:shadow-dark-tremor-input focus:dark:border-dark-tremor-brand-subtle focus:dark:ring-dark-tremor-brand-muted'
        )}
        required
      />
      {error && <p className="text-danger">{helperText}</p>}
    </div>
  );
}
