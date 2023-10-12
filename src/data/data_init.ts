export const initMaxValue = 5;
export const initMinValue = 0;
export const saveLocalStorageData = (key:string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value))
}