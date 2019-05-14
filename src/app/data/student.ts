import { User } from './user';

export class Student extends User {
    private _groupNumber: number;
    private _stat: any[] = [];

    constructor(firstName, lastName, groupNumber = 0) {
        super(firstName, lastName);
        this._groupNumber = groupNumber;
    }

    get groupNumber() {
        return this._groupNumber;
    }
    get stat(): any[] {
        return this._stat;
    }

    set groupNumber(value: number) {
        this._groupNumber = value;
    }
}