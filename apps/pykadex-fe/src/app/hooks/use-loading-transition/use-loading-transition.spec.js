import { act, renderHook } from '@testing-library/react';
import useLoadingTransition from './use-loading-Transition';

describe('useLoading', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLoadingTransition());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
