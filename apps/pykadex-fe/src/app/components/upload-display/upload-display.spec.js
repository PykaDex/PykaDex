import { render } from '@testing-library/react';
import UploadDisplay from './upload-display';
describe('UploadDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
