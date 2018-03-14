import { User } from "./user";

export class Admin extends User {
    private _passwordAjax: string = '45kek';
    private _password: string;

    constructor(firstName, lastName, password) {
        super(firstName, lastName);
        this._password = password;
    }

    get password(): string {
        return this._password;
    }

    public checkPassword(): boolean {
        if(this._passwordAjax != this._password) {
            return false;
        }
        
        return true;
    }
}