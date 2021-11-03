import BaseService from "@/service/base-service";
import User from "@/class/user";

class UserService extends BaseService<User>{
    constructor() {
        super("https://localhost:8080/user/");
    }
}
export default new UserService();
