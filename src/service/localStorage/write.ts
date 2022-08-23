import { ApplicationLocalStorage } from "../../type";

const writeLocalStorage = (key: keyof ApplicationLocalStorage, value:any) => {
    window.localStorage.setItem(key, value);
}

export { writeLocalStorage }