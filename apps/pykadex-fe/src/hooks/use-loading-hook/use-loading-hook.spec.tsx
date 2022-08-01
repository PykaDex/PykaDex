import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useLoadingHook from './use-loading-hook';

describe('useLoadingHook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLoadingHook());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
