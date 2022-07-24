export interface CellpropType {
    done: boolean,
    value: number,
    // days : number,
    data: {
        date : number,
        month : number,
        year : number,
    },
    fullTime: number,
}

export interface CellsPlan {
    planName: string,
    cells: CellpropType[],
}

export interface CellsState {
    plans: CellsPlan[],
}