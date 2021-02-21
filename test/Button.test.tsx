import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '../src/components';

describe('Button', () => {
  it('should render the button', () => {
    const { getByRole } = render(<Button />);

    expect(getByRole('button')).toBeInTheDocument();
  });
});
