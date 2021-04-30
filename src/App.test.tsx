import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
    render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>,
    );

    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
