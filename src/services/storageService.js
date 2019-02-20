class storageService {

    store = (key, val) => {
        localStorage.setItem(key, val);
    }

    clear = () => {
        localStorage.clear();
    }

}

export default storageService
