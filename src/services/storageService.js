class storageService {

    store = (key, val) => {
        //Encoded Key and Val
        key = window.btoa(key);
        val = window.btoa(val);
        localStorage.setItem(key, val);
    }

    clear = () => {
        localStorage.clear();
    }

    getItem = (key) => {
        //Decoded Key and Val
        key = window.btoa(key);
        const value = localStorage.getItem(key);
        return value ? window.atob(value) : null;
    }

}

export default storageService
