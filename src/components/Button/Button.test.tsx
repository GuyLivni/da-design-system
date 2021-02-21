import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from './Button';

describe('Button', () => {
  it('should render the button', () => {
    const { getByRole } = render(<Button>Heyo</Button>);

    expect(getByRole('button')).toHaveTextContent('Heyo');
    expect(getByRole('button')).toBeInTheDocument();
  });
});
