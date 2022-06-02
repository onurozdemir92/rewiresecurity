export interface IDevice {
  name: string;
  active: boolean;
  accuracy?: Accuracy;
  device: string;
  driver?: Driver;
  driverId?: number;
  trailer?: Trailer;
  engineHoursType: string;
  engineHours: number;
  fuelCostRate?: FuelCostRate;
  group?: Group;
  imei: string;
  mapArrows?: MapArrows;
  managerId?: number;
  icon: string;
  mapIcon: string;
  model: string;
  odometerType?: string;
  odometer: number;
  plateNumber?: string;
  protocol: string;
  port: string;
  sensors?: SensorsEntity[] | null;
  simNumber?: string;
  vin?: string;
  params: [] | null;
  timeAdj: string;
  activeDt: string;
  objectData: ObjectData;
  maintenance?: Maintenance;
  missingInformation: boolean;
  dvlaQuota: number;
  vehicleData?: VehicleData;
  displayIcon?: DisplayIcon;
}

export interface DisplayIcon {
  file: string;
  width?: number;
  height?: number;
  icon3d?: boolean;
}
export interface Accuracy {
  stops?: string;
  min_moving_speed?: string;
  min_idle_speed?: string;
  min_diff_points?: string;
  use_gpslev?: boolean;
  min_gpslev?: string;
  use_hdop?: boolean;
  max_hdop?: string;
  min_ff?: string;
  min_ft?: string;
}
export interface Driver {
  driverId?: number;
  driverName?: string;
}
export interface Trailer {
  trailerId?: number;
  trailerName?: string;
}
export interface FuelCostRate {
  source?: string;
  measurement?: string;
  cost?: string;
  summer?: string;
  winter?: string;
  winter_start?: string;
  winter_end?: string;
}
export interface Group {
  groupId?: number;
  groupName?: string;
}
export interface MapArrows {
  arrow_no_connection?: string;
  arrow_stopped?: string;
  arrow_moving?: string;
  arrow_engine_idle?: string;
}
export interface SensorsEntity {
  sensorId?: number;
  imei?: string;
  name?: string;
  type?: string;
  param?: string;
  popup?: string;
  resultType?: string;
  text_1?: string;
  text_0?: string;
  units?: string;
  lv?: number;
  hv?: number;
  formula?: string;
  calibration?: string;
  showAsInfo?: boolean;
}

export interface ObjectData {
  status: string;
  activityTime: string;
  data: Data;
}
export interface Data {
  speed: number;
  altitude: number;
  dtTracker: string;
  dtServer: string;
  angle: number;
  latitude: number;
  longitude: number;
  params: [] | null;
  address?: null;
}
export interface Maintenance {
  items?: null[] | null;
}
export interface VehicleData {
  vehicleRegistration?: VehicleRegistration;
  technicalDetails?: null;
  classificationDetails?: null;
  vehicleStatus?: null;
  vehicleHistory?: null;
  smmtDetails?: null;
  ukvdEnhancedData?: null;
  motHistory?: null;
  id?: number;
  imei?: string;
}
export interface VehicleRegistration {
  vin?: null;
  vrm?: string;
  make?: string;
  model?: string;
  colour?: string;
  yearOfManufacture?: number;
}
