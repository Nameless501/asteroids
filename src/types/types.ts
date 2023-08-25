export enum UnitsTypes {
    kilometers = 'kilometers',
    lunar = 'lunar',
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

export type CloseApproachData = {
    close_approach_date: string;
    epoch_date_close_approach: number;
    miss_distance: MissDistance;
    orbiting_body: string;
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

export interface IBasketContext {
    currentBasket: IAsteroid[];
    toggleBasketItem: (asteroid: IAsteroid) => void;
    submitBasket: (units: UnitsTypes) => void;
}
