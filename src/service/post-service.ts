import BaseService from "@/service/base-service";
import axios from "axios";
import Post from "@/class/post";

class PostService extends BaseService<Post>{
    constructor() {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        super(baseUrl+ "/post/");
    }
    getAllByUserId(id: number): Promise<Post[]> {
        return axios.get<Post[]>(this.baseUrl+"user/"+id.toString()).then((response) => {
            return response.data;
        })
    }
}
export default new PostService();
