// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       number[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:         string;
    type:       string;
    place_type: string[];
    relevance:  number;
    properties: Properties;
    text:       string;
    place_name: string;
    center:     number[];
    geometry:   Geometry;
    address:    string;
    context:    Context[];
}

export interface Context {
    id:          string;
    wikidata?:   string;
    mapbox_id:   string;
    text:        string;
    short_code?: string;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    accuracy:  string;
    mapbox_id: string;
}