export const HourToMs = (hour: number) => hour * 3600000;
export const MinToMs = (min: number) => min * 60000;
export const SecToMs = (sec: number) => sec * 1000;

export const MsToTimeFormat = (msTotal: number) => {
    const hour = msTotal / 3600000;
    let timeleft = msTotal % 3600000;
    const min = timeleft / 60000;
    timeleft = timeleft % 60000;
    const sec = timeleft / 1000;
    const ms = timeleft % 1000;
    return {
        hour: Math.trunc(hour), 
        min: Math.trunc(min), 
        sec: Math.trunc(sec), 
        ms
    }
};
