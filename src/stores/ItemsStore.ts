import { makeAutoObservable } from 'mobx';

import Item from './models/Item';

export default class ItemsStore {
    items: Item[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadAll() {
        const items = [
            {
                id: 1,
                title: 'Item 1',
                completed: true,
                createdAt: new Date(),
            },
            {
                id: 2,
                title: 'Item 2',
                completed: false,
                createdAt: new Date(),
            },
            {
                id: 3,
                title: 'Item 3',
                completed: false,
                createdAt: new Date(),
            },
        ];

        return new Promise<Item[]>((resolve) => {
            setTimeout(() => {
                this.items = items.map(item => new Item().fromJSON(item));

                resolve(this.items);
            }, 2000);
        });
    }

    addTodo(title: string) {
        const item = new Item().fromJSON({
            title,
            test: 'bar',
        });

        this.items.push(item);
    }
}
