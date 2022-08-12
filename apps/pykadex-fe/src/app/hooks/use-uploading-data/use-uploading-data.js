import { useState } from 'react';
export function useUploadingData(data) {
  const [uploadData, setUploadData] = useState([]);
  const [dataUploaded, setDataUploaded] = useState(true);

  function handleUploadData(data) {
    setDataUploaded(true);

    setUploadData([...uploadData, data]);
  }
  return { handleUploadData, uploadData, dataUploaded };
}

export default useUploadingData;
