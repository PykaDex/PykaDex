import { act, renderHook } from '@testing-library/react';
import useUploadingData from './use-uploading-data';
describe('useUploadingData', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useUploadingData());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
