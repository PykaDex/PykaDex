import { render } from '@testing-library/react';
import PykadexLogo from './pykadex-logo';
describe('PykadexLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PykadexLogo />);
    expect(baseElement).toBeTruthy();
  });
});
