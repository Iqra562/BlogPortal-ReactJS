import {create} from "apisauce";
import { AuthUtils } from "./Auth.util";
import { AuthService } from "../services/auth.service";
const ApiSauceInstance = create({
    baseURL: process.env.REACT_APP_API_URL,
});
const get = (url , queryParams={})=>{
const response =ApiSauceInstance.get(url,queryParams);
return response;
}
const post = (url,data)=>{
    const response = ApiSauceInstance.post(url,data);
    return response;
}
const put = (url,data)=>{
    const response = ApiSauceInstance.put(url,data);
    return response;
}
const patch = (url,data)=>{
    const response = ApiSauceInstance.patch(url,data);
    return response;
}
const deleteRequest = (url,queryParams)=>{
     const response =  ApiSauceInstance.delete(url ,queryParams);
     return response;
}
ApiSauceInstance.addRequestTransform((request)=>{
    const authenticated  = AuthService.IsUserLoggedIn();
    if(authenticated){
        request.headers["Authorization"] = `Bearer ${AuthService.getUserToken()}`

    }
})
export const ApiService= {
    get,
    post,
    put,
    patch,
    delete:deleteRequest,
}
