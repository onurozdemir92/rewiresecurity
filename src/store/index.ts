import { makeAutoObservable } from "mobx";
import { IDevice } from "../interfaces/DeviceInterface";


class Store {
    devices: IDevice[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    addDevices(devicesData: IDevice[]) {
        this.devices = devicesData
    }
}

const store = new Store();

export default store;