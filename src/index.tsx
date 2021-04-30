import 'reflect-metadata';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';

import './index.scss';

import { StoreProvider } from './stores';
import App from './App';
import reportWebVitals from './reportWebVitals';

configure({
    enforceActions: 'never',
    computedRequiresReaction: false,
    reactionRequiresObservable: false,
    observableRequiresReaction: false,
    disableErrorBoundaries: true,
});

render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
