import User from "@/classes/user";

export class Comment {
    private _id: number;
    private _message: string;
    private _user: User;

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
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
}
