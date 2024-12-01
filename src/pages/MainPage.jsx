import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import LineLink from "../components/LineLink";
import Button from "../components/forms/Button";
import add from "/svg/Plus.svg";

function MainPage({state}) {
    const location = useLocation();
    let locationStr = location.pathname.split("/").at(-1);

    if (locationStr === "customers") {
        locationStr = "Клиенты";
    } else if (locationStr === "creditProducts") {
        locationStr = "Кредитные продукты";
    } else if (locationStr === "loanAgreements") {
        locationStr = "Кредитные договоры";
    } else if (locationStr === "typesOperations") {
        locationStr = "Типы операций";
    } else if (locationStr === "transactions") {
        locationStr = "Транзакции";
    }

    let names = ["Axenix", state._username, locationStr];

    function onDownLoad(e) {
        
    }

    return ( 
        <div className="flex flex-col h-full">
            <Header />
            <main className="h-fit min-h-[60vh] bg-Black-300">
                <div className="flex items-center bg-White mb-[30px] px-[24px] py-[20px]">
                    <div>
                        <LineLink names={names} />
                        <h1 className="mt-20px font-medium text-[20px]">{locationStr}</h1>
                    </div>

                    <Button type="button" 
                        name="download"
                        onClickEvent={onDownLoad} 
                        style="size-[30px] ml-auto bg-transperent bg-no-repeat bg-center hover:opacity-95 bg-redo" />

                    <Button type="button" 
                        name="download"
                        onClickEvent={onDownLoad} 
                        style="flex items-center mx-[18px] gap-[8px] px-[10px] h-[40px] bg-Blue-100 text-White rounded-[2px] hover:opacity-95">
                        <img className="size-[18px]" src={add} alt="" />
                        <span>Добавить запись</span>
                    </Button>

                    <Button type="button" 
                        name="download"
                        onClickEvent={onDownLoad} 
                        style="size-[40px] bg-Blue-100 bg-no-repeat bg-center rounded-[2px] hover:opacity-95 bg-download" />
                </div>
                <div className="h-full bg-White rounded-[2px] px-[30px]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default MainPage;