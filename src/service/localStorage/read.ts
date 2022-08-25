import { LocalStorage } from "../../type";

const readLocalStorage = (key: keyof LocalStorage) => {
    return window.localStorage[key];
};

export { readLocalStorage };
