import { Colors } from "../theme/Colors"


export const DevicesTypes = {
    moving: 'moving',
    idling: 'idling',
    offline: 'offline',
    stopped: 'stopped',
    pgd: 'pgd'
}


export const DevicesHelpers = {
    getNotActiveStateText: () => {
        return 'Tracking service for this device has \n expired. Click here to active'
    },
    getStatusColor: (status: string) => {
        switch (status) {
            case DevicesTypes.moving:
                return Colors.moving
            case DevicesTypes.idling:
                return Colors.idling
            case DevicesTypes.offline:
                return Colors.offline
            case DevicesTypes.pgd:
                return Colors.pgd
            case DevicesTypes.stopped:
                return Colors.stopped

        }
    }
}