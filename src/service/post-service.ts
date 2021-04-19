import BaseService from "@/service/base-service";
import PostComment from "@/class/postComment";
import axios from "axios";
import Post from "@/class/post";

class PostService extends BaseService<PostComment>{
    constructor() {
        super("http://localhost:9002/game-highlights/api/post/");
    }
    getAllByUserId(id: number): Promise<Post[]> {
        return axios.get<Post[]>(this.baseUrl+"user/"+id.toString()).then((response) => {
            return response.data;
        })
    }
}
export default new PostService();
