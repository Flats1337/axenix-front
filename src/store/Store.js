import {apiCheckToken, apiServerStatus, apiCreateChat, apiSendMessage} from "../api/Api"

let store = {
    rerender: () => {},
    subscribe(observer) {
        store.rerender = observer;
    },

    _state: {
        _token: localStorage.getItem("token_api"),
        _isVerified: false,
        __isFetching: false,
        _isWokrServer: false,
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

}

export default store;