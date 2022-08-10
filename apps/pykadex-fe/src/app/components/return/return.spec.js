import { render } from '@testing-library/react';
import Return from './return';
describe('Return', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Return />);
    expect(baseElement).toBeTruthy();
  });
});
