import { NavLink } from "react-router-dom";
import logo from "/static/Logo2.png";


function Header({}) {
    return ( 
        <header className="flex gap-[5px] items-center px-[15px] py-[8px] bg-Blue-900">
            <img className="h-[32px] mr-[20px]" src={logo} alt="" />
            <nav>
                <ul className="text-White flex gap-[20px] text-[18px]">
                    <li><NavLink to="customers" className="">Клиенты</NavLink></li>
                    <li><NavLink to="creditProducts" className="">Кредитные продукты</NavLink></li>
                    <li><NavLink to="loanAgreements" className="">Кредитные договоры</NavLink></li>
                    <li><NavLink to="typesOperations" className="">Типы операций</NavLink></li>
                    <li><NavLink to="transactions" className="">Транзакции</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;