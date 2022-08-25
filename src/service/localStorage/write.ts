import { LocalStorage } from "../../type";

const writeLocalStorage = (key: keyof LocalStorage, value:any) => {
    window.localStorage.setItem(key, value);
}

export { writeLocalStorage }