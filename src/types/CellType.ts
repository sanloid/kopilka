export enum CellType{
    done = 'cellDone',
    notdone = 'cellNotDone',
    notinplan = 'cellNotInPlan',
}

export interface CellpropType {
    planIndex: number,
    done: boolean,
    value: number,
    type : CellType,
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