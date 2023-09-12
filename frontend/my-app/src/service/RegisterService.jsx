import axios from "axios";

class RegisterService {
    constructor(){
        this.registerService= this.registerService.bind(this);
    }
    registerService(obj) {
        return axios.post("http://localhost:8080/users/createUser", obj);
    }
}
export default new RegisterService();