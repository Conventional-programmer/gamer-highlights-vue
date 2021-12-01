import User from './user';

export default class Like {
    private postId?: number;
    private user?: User;

    get PostId() : number
    {
        return this.postId!;
    }
    set PostId(value: number)
    {
        this.PostId = value;    
    }
    get User(): User
    {
        return this.user!;
    }
    set User(value: User)
    {
        this.user = value;    
    }
}
