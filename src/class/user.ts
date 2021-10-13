export default class User {
    public id?: number
    private _username?: string
    private _email?: string
    private _imageUrl?: string
    private _password?: string
    private _description?: string

    get username(): string {
        return this._username!;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password!;
    }

    set password(value: string) {
        this._password = value;
    }

    get description(): string {
        return this._description!;
    }

    set description(value: string) {
        this._description = value;
    }

    get imageUrl(): string {
        return this._imageUrl!;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }
    get email(): string {
        return this._email!;
    }
    set email(value: string)
    {
        this._email = value;
    }
}
