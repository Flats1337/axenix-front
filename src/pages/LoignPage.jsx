import { useState } from "react";
import { GHOST_ANIMATE_DELAY } from "../config"
import Input from "../components/forms/Input"
import Button from "../components/forms/Button";




function LoginPage({login}) {
    const [tokenValue, setTokenValue] = useState("");

    const Style = {"--time": `${GHOST_ANIMATE_DELAY}ms`};

    function onChangeToken(e) {
        setTokenValue(e.target.value);
    }

    function LoginSubmit(e) {
        e.preventDefault();
        login(tokenValue);
    }

    return ( 
        <section style={Style} className="animate-show">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi neque corporis cum, earum obcaecati, dolor reiciendis sapiente natus officia quod similique quo! Quo, dolorem quod molestias nostrum eos quisquam aut.
            <form action="" className="" onSubmit={LoginSubmit}>
                <Input type="text" name="token" onChangeEvent={onChangeToken} style="" placeholder="" />
                <Button type="submit" 
                        name="submit" 
                        style="" />
            </form>
        </section>
    );
}

export default LoginPage;