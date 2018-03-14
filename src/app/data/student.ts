import { User } from './user';

export class Student extends User {
    private _groupNumber: number;

    constructor(firstName, lastName, groupNumber = 0) {
        super(firstName, lastName);
        this._groupNumber = groupNumber;
    }

    get groupNumber() {
        return this._groupNumber;
    }

    set groupNumber(value: number) {
        this._groupNumber = value;
    }
}