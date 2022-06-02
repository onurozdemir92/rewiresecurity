import { IDevice } from "../interfaces/DeviceInterface"
import axiosClient from "./AxiosClient"


export const getDevices = async (): Promise<IDevice[]> => {

    const response = await axiosClient.get('/devices')
    if (response?.data) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject('err response')
    }

}