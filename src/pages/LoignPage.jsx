import { useState } from "react";
import { GHOST_ANIMATE_DELAY } from "../config"
import Input from "../components/forms/Input"
import Button from "../components/forms/Button";




function LoginPage({login}) {
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [safeMeValue, setSafeMeValue] = useState(true);

    const Style = {"--time": `${GHOST_ANIMATE_DELAY}ms`};

    function onChangeTypeSign(e) {
    }

    function onChangeUsername(e) {
        setUsernameValue(e.target.value);
    }

    function onChangePassword(e) {
        setPasswordValue(e.target.value);
    }

    function onChangeSafeMe(e) {
        if (safeMeValue) {
            setSafeMeValue(false);
        } else {
            setSafeMeValue(true);
        }     
    }

    function LoginSubmit(e) {
        e.preventDefault();
        login(usernameValue, passwordValue, safeMeValue);
    }

    return ( 
        <section style={Style} className="flex justify-center items-center h-full">
            <form action="" className="flex flex-col justify-center max-w-[360px] w-full animate-show" onSubmit={LoginSubmit}>
                <img className="h-[60px] mb-[25px] mx-auto" src="./static/Logo.png" alt="" />

                <div className="flex justify-between pb-[8px] border-b-[1px] text-[20px] border-Black-100 text-Blue-100 select-none">
                    <label className="cursor-pointer pb-[2px] border-b-[2px]">
                        <Input type="radio" name="typeSign" onChangeEvent={onChangeTypeSign} style="hidden" />
                        <span>Вход</span>
                    </label>
                </div>

                <label className="flex w-full h-[40px] mb-[20px] rounded-[2px] border-[1px] border-Black-200 cursor-text">
                    <span className="flex items-center justify-center h-full px-[4px] aspect-square">
                        <img className="size-[16px]" src="./svg/User.svg" alt="" />
                    </span>
                    <Input type="text" name="username" onChangeEvent={onChangeUsername} style="w-full h-full text-Black-900 placeholder:text-opacity-25 bg-transparent outline-none" placeholder="Имя пользователя" />
                </label>

                <label className="flex w-full h-[40px] mb-[10px] rounded-[2px] border-[1px] border-Black-200 cursor-text">
                    <span className="flex items-center justify-center h-full px-[4px] aspect-square">
                        <img className="size-[16px]" src="./svg/Password.svg" alt="" />
                    </span>
                    <Input type="text" name="password" onChangeEvent={onChangePassword} style="w-full h-full text-Black-900 placeholder:text-opacity-25 bg-transparent outline-none" placeholder="Пароль" />
                </label>

                <div className="flex justify-between items-center">
                    <label className="flex items-center gap-[5px] w-fit cursor-pointer select-none">
                        <Input type="checkbox" name="safeMe" onChangeEvent={onChangeSafeMe} style="size-[16px]" isChecked={safeMeValue} />
                        <span>Запомнить меня</span>
                    </label>

                    <Button type="submit" 
                        name="submit" 
                        style="w-[115px] py-[12px] text-[14px] rounded-[2px] text-White bg-Blue-100">
                        Войти
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default LoginPage;