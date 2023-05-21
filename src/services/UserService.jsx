import { api } from "./Api"
const endPoint = "user";
const UserLogin = async (data) => {
    return await api.post(endPoint + "/login", data)
}
const AddUser = async (data) => {
    return await api.post(endPoint, data)
}
export { UserLogin, AddUser }