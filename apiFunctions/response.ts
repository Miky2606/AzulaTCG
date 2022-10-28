

export enum Status {
    InitState,
    Load,
    Loaded,
    Error
}

export interface ResponseStatus {
    GET?: Function,
    POST?: Function,
    PUT?: Function,
    DELETE?: Function,

}