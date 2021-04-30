import React from 'react';
import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

test('renders loading', () => {
    render(<Spinner/>);

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
});
