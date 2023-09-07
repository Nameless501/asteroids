export enum UnitsTypes {
    kilometers = 'kilometers',
    lunar = 'lunar',
}

export enum NotificationTypes {
    cme = 'CME',
    gst = 'GST',
    flr = 'FLR',
    rbe = 'RBE',
}

export type Diameter = {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
};

export type EstimatedDiameter = {
    meters: Diameter;
};

export type MissDistance = {
    lunar: string;
    kilometers: string;
};

export type RelativeVelocity = {
    kilometers_per_hour: string;
};

export type OrbitBodies =
    | 'Merc'
    | 'Venus'
    | 'Earth'
    | 'Mars'
    | 'Juptr'
    | 'Saturn'
    | 'Uranus'
    | 'Neptn'
    | 'Moon';

export type CloseApproachData = {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    miss_distance: MissDistance;
    orbiting_body: OrbitBodies;
    relative_velocity: RelativeVelocity;
};

export type OrbitalData = {
    first_observation_date: string;
};

export interface IAsteroid {
    id: string;
    name: string;
    estimated_diameter: EstimatedDiameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproachData[];
    orbital_data: OrbitalData;
}

export type NearEarthObjects = {
    [key: string]: IAsteroid[];
};

export type Links = {
    next: string;
};

export interface IApiResponse {
    links: Links;
    near_earth_objects: NearEarthObjects;
}

export interface IUnitsContext {
    units: UnitsTypes;
    handleUnitsChange: (value: UnitsTypes) => void;
}

export interface INotification {
    messageType: NotificationTypes;
    messageID: string;
    messageIssueTime: string;
}
