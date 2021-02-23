import * as React from 'react';

import { render } from '../../util/testUtils';
import { Button } from './Button';

describe('Button', () => {
  it('should render the button', () => {
    const text = 'Heyo';
    const { getByRole } = render(<Button>{text}</Button>);

    expect(getByRole('button')).toHaveTextContent(text);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
