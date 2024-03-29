import { useState } from 'react';

import { Card } from '@tremor/react';
import FormPropsTextFields from '../inputs/text';
import FormPropsEditorFields from '../inputs/editor';
import MyUploader from '../inputs/uploader';
import { IFileWithMeta } from 'react-dropzone-uploader';
import FormPropsSelectFields from '../inputs/select';
import { BooleanItems } from './constrains';

export default function RoleForm() {
  const [title, setTitle] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [logo, setLogo] = useState<IFileWithMeta['meta'][]>([]);
  return (
    <form action="" className="mt-6">
      <Card className="mb-4">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
          <FormPropsTextFields
            label="title"
            className="sm:col-span-6"
            name="title"
            value={title}
            required
          />
          <FormPropsEditorFields
            name="description"
            label="Description"
            placeholder="Compose an epic..."
            setChange={setDescription}
            value={description}
            required
          />
        </div>
      </Card>
      <Card className="mb-4 p-3 justify-between bg-light">
       Permission
      </Card>
    </form>
  );
}
