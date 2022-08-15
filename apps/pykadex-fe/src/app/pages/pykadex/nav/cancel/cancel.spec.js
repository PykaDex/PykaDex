import { render } from '@testing-library/react';
import Cancel from './cancel';
describe('Cancel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cancel />);
    expect(baseElement).toBeTruthy();
  });
});
