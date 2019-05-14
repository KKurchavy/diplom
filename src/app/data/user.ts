export class User {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName = 'Аноним', lastName = 'Аноним') {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
}