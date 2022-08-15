import { render } from '@testing-library/react';
import StatsBar from './stats-bar';
describe('StatsBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatsBar />);
    expect(baseElement).toBeTruthy();
  });
});
