import {apiAuth, apiCheckToken} from "../api/Api"

let store = {
    rerender: () => {},
    subscribe(observer) {
        store.rerender = observer;
    },

    _state: {
        _username: localStorage.getItem("username"),
        _token: localStorage.getItem("token_api"),
        _isVerified: false,
        __isFetching: false,
        __safeMe: false,
        _dataTable: [],
    },

    safeMe(bool) {
        store._state.__safeMe = bool;
    },

    setName(username) {
        localStorage.setItem("username", username);
        store._state._username = username;
    },

    deletName() {
        store._state._username = null;
        localStorage.removeItem("username");
    },

    setToken(token) {
        store._state._token = token;
        store._state._isVerified = true;
        localStorage.setItem("token_api", token);
    },

    deletToken() {
        store._state._token = null;
        store._state._isVerified = false;
        localStorage.removeItem("token_api");
        store.deletName();
    },

    checkToken(token) {    
        if (store._state.__isFetching) {
            return 0;
        }
        store._state.__isFetching = true;
        
        apiCheckToken(token)
        .then(message => {
            if (message?.status === "Unauthorized") {       
                store.deletToken();
            } else if (message?.status === "ok") {
                store.setToken(token);     
            } 

            store._state.__isFetching = false;
            store.rerender(store);
        })
    },

    auth(username, password) {    
        if (store._state.__isFetching) {
            return 0;
        }
        store._state.__isFetching = true;
        
        apiAuth(username, password)
        .then(message => {
            if (message?.status === "Unauthorized") {       
                store.deletToken();
            } else if (message?.token) {
                store.setName(username);
                store.setToken(message?.token);     
            } 

            store._state.__isFetching = false;
            store.rerender(store);
        })
    },

    addData(Row) {
        store._state._dataTable.push(Row);
    },

    getData(model) {
        if (model === "Customers") {
            store._state._dataTable = [
                ["1","1","Лопушок","","2009.12.12","13300323013","+7(929)-192-22-11"],
                ["2","1","Гречка","","2019.05.12","13300323013","+7(922)-152-25-66"],
            ]
        } else if (model === "CreditProducts") {

        } else if (model === "CreditAgreements") {

        } else if (model === "TransactionTypes") {

        } else if (model === "CreditTransactions") {

        }

        store.rerender(store);
    },
}

export default store;