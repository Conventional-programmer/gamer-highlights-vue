import User from "@/class/user";

export default class PostComment {
    private _id: number;
    private _message: string;
    private _user?: User;


    constructor(id: number, message: string, user: User) {
        this._id = id;
        this._message = message;
        this._user = user;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get message(): string {
        return this._message;
    }

    set comment(value: string) {
        this._message = value;
    }

    get user(): User {
        return this._user!;
    }

    set user(value: User) {
        this._user = value;
    }
}
