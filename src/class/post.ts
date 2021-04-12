import User from "@/class/user";
import PostComment from "@/class/postComment";
export default class Post {
    private _id?: number
    private _postingUser?: User
    private _imageUrl?: string
    private _description?: string
    private _comments?: PostComment[]
    private _likes?: number


    constructor(id: number, postingUser: User, imageUrl: string, description: string, comments: PostComment[], likes: number) {
        this._id = id;
        this._postingUser = postingUser;
        this._imageUrl = imageUrl;
        this._description = description;
        this._comments = comments;
        this._likes = likes;
    }

    get id(): number {
        return this._id!;
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
        return this._imageUrl!;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get description(): string {
        return this._description!;
    }

    set description(value: string) {
        this._description = value;
    }

    get comments(): PostComment[] {
        return this._comments!;
    }

    set comments(value: PostComment[]) {
        this._comments = value;
    }

    get likes(): number {
        return this._likes!;
    }

    set likes(value: number) {
        this._likes = value;
    }
}
