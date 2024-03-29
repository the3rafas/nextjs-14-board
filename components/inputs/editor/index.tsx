import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';
import { Dispatch, SetStateAction, useEffect } from 'react';
type Props = {
  name: string;
  error?: boolean;
  required?: boolean;
  helperText?: string;
  label: string;
  placeholder?: string;
  setChange: Dispatch<SetStateAction<string>>;
  value: string;
  className?: string;
};
export default function FormPropsEditorFields({
  error,
  helperText,
  label,
  placeholder,
  setChange,
  required,
  value,
  className,
  name
}: Props) {
  const { quill, quillRef } = useQuill({ placeholder });
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log('Text change!');
        setChange(quill.getContents());
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  return (
    <div className={'col-span-full sm:col-span-12 ' + className}>
      <label
        htmlFor={name}
        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div className="mt-3">
        <div
          ref={quillRef}
          className="border-0"
          style={{ height: '10rem !important' }}
        />
      </div>
      {error && <p className="text-danger">{helperText}</p>}
    </div>
  );
}
