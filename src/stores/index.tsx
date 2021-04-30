import { observable } from 'mobx';
import { createContext, ReactNode, useContext, useState } from 'react';

import ItemsStore from './ItemsStore';

const stores = {
    itemsStore: new ItemsStore(),
};

const StoreContext = createContext(stores);

export function StoreProvider({ children }: { children: ReactNode }) {
    return (
        <StoreContext.Provider value={stores}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('Must be used within StoreProvider');
    }

    return context;
}

export function useLocalStore<T extends Record<string, unknown>>(initialState: T) {
    const [localStore] = useState(() => observable(initialState, undefined, { autoBind: true }));
    return { localStore };
}
