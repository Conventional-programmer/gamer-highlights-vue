import BaseService from "@/service/base-service";
import User from "@/class/user";

class UserService extends BaseService<User>{
    constructor() {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        super(baseUrl+"/user/");
    }
}
export default new UserService();
