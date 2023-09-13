import axios from "axios";

class UserService {
    constructor(){
        this.registerService= this.registerService.bind(this);
        this.loginService = this.loginService.bind(this);
    }
    registerService(obj) {
        return axios.post("http://localhost:8080/users/createUser", obj);
    }
    loginService(obj) {
        return axios.post("http://localhost:8080/users/login",obj);
    }
}
export default new UserService();