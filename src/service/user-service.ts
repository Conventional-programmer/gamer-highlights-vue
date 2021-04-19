import BaseService from "@/service/base-service";
import User from "@/class/user";

class UserService extends BaseService<User>{
    constructor() {
        super("http://localhost:9001/game-highlights/api/user/");
    }
}
export default new UserService();
