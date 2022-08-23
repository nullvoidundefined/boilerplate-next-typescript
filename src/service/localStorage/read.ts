import { ApplicationLocalStorage } from "../../type";

const readLocalStorage = (key: keyof ApplicationLocalStorage) => {
    return window.localStorage[key];
};

export { readLocalStorage };
