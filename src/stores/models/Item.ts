import { makeAutoObservable } from 'mobx';
import { classToPlain, Exclude, plainToClassFromExist } from 'class-transformer';

export default class Item {
    id = Math.round(Math.random() * 1000000);
    title!: string;
    completed = false;
    createdAt = new Date();

    @Exclude({
        toClassOnly: false,
        toPlainOnly: true,
    })
    test = 'foo';

    constructor() {
        makeAutoObservable(this);
    }

    fromJSON(plain: unknown) {
        return plainToClassFromExist(this, plain);
    }

    toJSON() {
        return classToPlain(this);
    }
}
