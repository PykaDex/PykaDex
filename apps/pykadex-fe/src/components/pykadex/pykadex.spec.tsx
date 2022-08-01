import { render } from '@testing-library/react';

import Pykadex from './pykadex';

describe('Pykadex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pykadex />);
    expect(baseElement).toBeTruthy();
  });
});
