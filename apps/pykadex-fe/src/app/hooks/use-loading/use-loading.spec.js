import { act, renderHook } from '@testing-library/react';
import useLoading from './use-loading';
describe('useLoading', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLoading());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
