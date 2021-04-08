import User from "@/classes/user";

export default class Post {
    private _id: number
    private _postingUser?: User
    private _imageUrl: string
    private _description: string
    private _commentDtos?: Comment[]
    private _likes: number


    constructor() {
        this._id= 0;
        this._imageUrl = '';
        this._description = '';
        this._likes = 0;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get postingUser(): User {
        return this._postingUser!;
    }

    set postingUser(value: User) {
        this._postingUser = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get commentDtos(): Comment[] {
        return this._commentDtos!;
    }

    set commentDtos(value: Comment[]) {
        this._commentDtos = value;
    }

    get likes(): number {
        return this._likes;
    }

    set likes(value: number) {
        this._likes = value;
    }
}
