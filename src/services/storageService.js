class storageService {

    store = (key, val) => {
        key = window.btoa(key);
        val = window.btoa(val);
        localStorage.setItem(key, val);
    }

    clear = () => {
        localStorage.clear();
    }

    getItem = (key) => {
        key = window.btoa(key);
        const value = localStorage.getItem(key);
        return value ? window.atob(value) : null;
    }

}

export default storageService
