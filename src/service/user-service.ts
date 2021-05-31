import BaseService from "@/service/base-service";
import User from "@/class/user";

class UserService extends BaseService<User>{
    constructor() {
        super("http://localhost/user/");
    }
}
export default new UserService();
