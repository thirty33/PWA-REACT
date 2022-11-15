import { useState } from "react";

export function useLocalStorage (key, initialValue) {
    const [storeValue, setStoreValue] = useState(() => {
        try {
            const item = JSON.parse(localStorage.getItem(key))
            return item !== null ? JSON.parse(item) : initialValue;
        }
        catch(error) {
            return initialValue
        }
    });

    const setLocalStorage = value => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setStoreValue(value);
        }
        catch(error) {
            console.error(error)
        }
    }

    return [
        storeValue, setLocalStorage
    ]
}