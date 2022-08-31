import { LocalStorage } from "../../../../type";

const writeLocalStorage = (key: keyof LocalStorage, value: string) => {
    window.localStorage.setItem(key, value);
};

export { writeLocalStorage };
