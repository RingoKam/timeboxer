export interface TimeboxerModel {
    title: string, 
    speaker: string, 
    time: number,
    playing: boolean,
    playingTime?: number, 
    warning?: number
}