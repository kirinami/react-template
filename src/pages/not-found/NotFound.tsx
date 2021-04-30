import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';

import styles from './NotFound.module.scss';

export default observer(function NotFound() {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Not Found</title>
            </Helmet>

            <h3>404, Not Found</h3>
            <code>No match: {location.pathname}</code>
        </div>
    );
});
