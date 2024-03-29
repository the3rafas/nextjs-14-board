import { Select, SelectItem } from '@tremor/react';
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
  items: { key: string; value?: string; label: string }[];
};
export default function FormPropsSelectFields({
  error,
  helperText,
  label,
  placeholder,
  onChange,
  required,
  value,
  className,
  name,
  items
}: Props) {
  return (
    <div className={'col-span-full sm:col-span-4 ' + className}>
      <label
        htmlFor="first-name"
        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <Select id={name} placeholder={placeholder} className="mt-2">
        {items.map((item) => (
          <SelectItem key={item.key} value={item.value || item.label}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
      {error && <p className="text-danger">{helperText}</p>}
    </div>
  );
}
