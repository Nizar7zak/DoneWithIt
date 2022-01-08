import {create} from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.1.112:9000/api",
})

export default apiClient;