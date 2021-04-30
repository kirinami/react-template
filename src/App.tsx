import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';

import logo from './assets/logo.svg';
import Spinner from './components/spinner/Spinner';

import styles from './App.module.scss';

const Home = lazy(() => import('./pages/home/Home'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

export default observer(function App() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <div>Edit <code>src/App.tsx</code> and save to reload.</div>
                </div>

                <div className={styles.headerMenu}>
                    <Link className={styles.link} to="/">Home</Link>
                    <Link className={styles.link} to="/not-found">Not Found</Link>

                    <a
                        className={styles.link}
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
            </header>

            <div className={styles.body}>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route path="/" exact><Home/></Route>
                        <Route path="*"><NotFound/></Route>
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
});
