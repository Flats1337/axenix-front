//import logo from "/images/svg/logo.svg";
import { GHOST_ANIMATE_DELAY } from "../config";

function Preload() {
    const stylePreload = {"--time": `${GHOST_ANIMATE_DELAY}ms`}

    return ( 
        <section style={stylePreload} className="flex justify-center items-center h-full animate-ping">
            <img className="h-[60px]" src="./static/Logo.png" alt="" />
        </section>
    );
}

export default Preload;