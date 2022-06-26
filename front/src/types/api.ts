export interface ReqresApiResponse<T> {
    data: T;
}

export interface Game {
    id : number;
    name : string;
    context : string;
    level : number;
    field : number;
}

export interface Field {
    id : number;
    name : string;
}

export interface File {
    id : number;
    name : string;
    size : number;
    mime : string;
}

export interface Voice {
    id : number;
    game_id : number;
    file_id : number;
    type : string;
}