import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { PRELOAD_ANIMATE_DELAY, SERVER_CHECK_STATUS_DELAY } from "./config";

import LoginPage from "./pages/LoignPage"
import Preload from "./pages/Preload";

function App({store}) {    
    const location = useLocation();
	const navigate = useNavigate();
    const state = store._state;

    const [isHidden, setIsHidden] = useState(false);
    
    useEffect(()=> { 
        if (!state._isWokrServer) {        
            setTimeout( () => {
                 store.serverStatus();
            }, SERVER_CHECK_STATUS_DELAY);
        }

        if (location.pathname !== "/" && !state._isWokrServer) {
            navigate("/");
        }

        if (location.pathname !== "/login" && state._isWokrServer) {
            setIsHidden(true);
            setTimeout(() => {
                navigate("/login");
            }, PRELOAD_ANIMATE_DELAY);
        }


        /* if (state._isVerified && !state._isWokrServer) {
            store.serverStatus();
            
            setTimeout( () => {
                 store.serverStatus();
            }, SERVER_CHECK_STATUS_DELAY);
        }

        if (!state._isVerified && state._token) {
            store.checkToken(state._token);
        }
        
        if (location.pathname !== "/" && !state._isWokrServer) {
            navigate("/");
        }

        if (location.pathname !== "/login" && !state._isVerified) {
            navigate("/");
        } */
    })
    
    function login(token) {
        if (token.length < 1 ) {
            return 0;
        } 

        store.checkToken(token);
    }

	return (
	<Routes>
		<Route path="/*" element={ <Preload isHidden={isHidden} /> } />
		<Route path="login" element={ <LoginPage login={login} /> } />   
	</Routes>
	)
}

export default App
