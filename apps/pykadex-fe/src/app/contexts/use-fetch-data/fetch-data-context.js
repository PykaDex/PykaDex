import { useState, useRef, createContext } from 'react';
import { useDispatch } from 'react-redux';

/* eslint-disable */
import {
  toggleIsSent,
  toggleIsLoaded,
} from 'apps/pykadex-fe/src/slices/uploadSlice';

import {
  updateId,
  updateName,
  updateUrl,
  updateStats,
  updateType,
  updateDescription,
} from 'apps/pykadex-fe/src/slices/returnDataSlice';
/* eslint-enable */

export const fetchContext = createContext(null);

export function FetchProvider({ children }) {
  const dispatch = useDispatch();
  const abortController = useRef(null);

  const [file, setFile] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleIsSent(true));

    abortController.current = new AbortController();

    let data = new FormData();
    const url = 'http://localhost:3333/pykadex';

    data.append('image', file);

    fetch(url, {
      method: 'POST',
      body: data,
      signal: abortController.current.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('use context', data);
        dispatch(toggleIsLoaded(true));

        dispatch(updateId(data.id));
        dispatch(updateName(data.name));
        dispatch(updateUrl(data.url));
        dispatch(updateStats(data.base));
        dispatch(updateDescription(data.description));
        dispatch(updateType(data.type));
      })
      .catch((error) => {
        console.log(`Failure:  ${error.message}`);
      });
  };

  const cancelSubmission = () => {
    abortController.current && abortController.current.abort();
  };

  const value = { handleSubmit, cancelSubmission, setFile };

  return (
    <fetchContext.Provider value={value}>{children}</fetchContext.Provider>
  );
}
