import 'react-dropzone-uploader/dist/styles.css';

import Dropzone, { IFileWithMeta, StatusValue } from 'react-dropzone-uploader';
import { Dispatch, SetStateAction } from 'react';

export default function MyUploader({
  setChange,
  value
}: {
  value: any;
  setChange: Dispatch<SetStateAction<IFileWithMeta['meta'][]>>;
}) {
  // specify upload params and url for your files

  // called every time a file's `status` changes
  const handleChangeStatus = (
    file: IFileWithMeta,
    status: StatusValue,
    allFiles: IFileWithMeta[]
  ) => {
    if (status === 'done')
      console.log(setChange(allFiles.map((f: any) => f.meta)));
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (e: any, files: any) => {
    e.prventDefault;
    console.log(files.map((f: any) => f.meta));
  };

  return (
    <Dropzone
      addClassNames={{
        dropzone: 'bg-gray-100'
      }}
      styles={{
        dropzone: { border: 'none !important', overflow: 'hidden !important' }
      }}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
      getUploadParams={() => ({ url: 'https://httpbin.org/post' })}
    />
  );
}
