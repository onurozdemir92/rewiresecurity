import store from "."
import { getDevices } from "../apis/DeviceApi"


export const fetchDevices = async () => {
    const devices = await getDevices()
    if (devices) {
        store.addDevices(devices)
    }
}