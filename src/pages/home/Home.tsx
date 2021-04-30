import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';

import Spinner from '../../components/spinner/Spinner';
import { useLocalStore, useStore } from '../../stores';

import styles from './Home.module.scss';

type LocalStore = {
    loading: boolean,
    error: string,
};

export default observer(function Home() {
    const { itemsStore } = useStore();
    const { localStore } = useLocalStore<LocalStore>({
        loading: true,
        error: '',
    });

    useEffect(() => {
        localStore.loading = true;

        itemsStore.loadAll()
            .catch((err) => {
                localStore.error = err.message || 'Undefined error';
            })
            .finally(() => {
                localStore.loading = false;
            });
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div>
                <h3>Home</h3>
            </div>

            {localStore.loading
                ? <Spinner/>
                : (
                    <div>
                        {itemsStore.items.map(item => (
                            <div key={item.id}>
                                <label htmlFor={`item-${item.id}`}>
                                    <input
                                        type="checkbox"
                                        id={`item-${item.id}`}
                                        checked={item.completed}
                                        onChange={(event) => {
                                            item.completed = event.target.checked;
                                        }}
                                    />
                                    {item.title} ({item.test})
                                </label>
                            </div>
                        ))}

                        <hr/>

                        <button
                            type="button"
                            onClick={() => itemsStore.addTodo(global.prompt('Item title:') || 'Untitled')}
                        >
                            Add item
                        </button>

                        <hr/>

                        <pre>
                            {JSON.stringify(itemsStore.items, null, 2)}
                        </pre>
                    </div>
                )}

            {localStore.error && (
                <div style={{ color: '#ff0000' }}>{localStore.error}</div>
            )}
        </div>
    );
});
