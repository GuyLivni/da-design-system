import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SCButton as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    const { getByRole } = render(<Button text="test" />);

    expect(getByRole('button')).toBeInTheDocument();
  });
});
