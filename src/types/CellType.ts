export interface CellpropType {
    done: boolean,
    value: number,
    data: any,
    fullTime: number,
}

export interface CellsPlan {
    planName: string,
    cells: CellpropType[],
}

export interface CellsState {
    plans: CellsPlan[],
}