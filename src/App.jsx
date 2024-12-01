import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { CreditAgreements, CreditProducts, CreditTransactions, Customers, PRELOAD_ANIMATE_DELAY, SERVER_CHECK_STATUS_DELAY, TransactionTypes } from "./config";

import LoginPage from "./pages/LoignPage"
import Preload from "./pages/Preload";
import MainPage from "./pages/MainPage";
import Table from "./components/Table";

function App({store}) {    
    const location = useLocation();
	const navigate = useNavigate();
    const state = store._state;

    const [preload, setPreload] = useState(true);
    
    useEffect(()=> { 
        if (preload) {
            setTimeout(() => {
                setPreload(false); 
            }, PRELOAD_ANIMATE_DELAY);
        }

        if (location.pathname !== "/" && preload) {
            navigate("/");
        }

        if (location.pathname !== "/login" && !preload && !state._isVerified) {
            store.checkToken(store._state._token);
            navigate("/login");
        }

        if (location.pathname !== "/main" && location.pathname.split("/").at(1) !== "main" && !preload && state._isVerified) {
            navigate("/main/customers");        
        }
    })

    function login(username, password, safeMe) {
        if (username.length < 1 || password.length < 1) {
            return 0;
        } 

        store.safeMe(safeMe);
        store.auth(username, password);
    }

    function getData(model) {
        if (model === "Customers") {
            store.getData("Customers");
        } else if (model === "CreditProducts") {
            store.getData("CreditProducts");
        } else if (model === "CreditAgreements") {
            store.getData("CreditAgreements");
        } else if (model === "TransactionTypes") {
            store.getData("TransactionTypes");
        } else if (model === "CreditTransactions") {
            store.getData("CreditTransactions");
        }
    }

    function addData() {
        store.addData("g");
    }

	return (
	<Routes>
		<Route path="/*" element={ <Preload /> } />
		<Route path="login" element={ <LoginPage login={login} /> } />   
        <Route path="main" element={ <MainPage state={state} login={login} /> } >
            <Route path="customers" element={ <Table state={state} addData={addData} model={Customers} getData={getData} name={"Customers"} />} />
            <Route path="creditProducts" element={ <Table state={state} addData={addData} model={Customers} getData={getData} name={"Customers"}  />} />
            <Route path="loanAgreements" element={ <Table state={state} addData={addData} model={Customers} getData={getData} name={"Customers"}  />} />
            <Route path="typesOperations" element={ <Table state={state} addData={addData} model={Customers} getData={getData} name={"Customers"}  />} />
            <Route path="transactions" element={ <Table state={state} addData={addData} model={Customers} getData={getData} name={"Customers"}  />} />
        </Route>  
	</Routes>
	)
}

export default App
