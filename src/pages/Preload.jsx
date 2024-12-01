//import logo from "/images/svg/logo.svg";
import { PRELOAD_ANIMATE_DELAY } from "../config";

function Preload({isHidden}) {
    const animate = isHidden ? "animate-hidden" : "animate-show";
    const stylePreload = {"--time": `${PRELOAD_ANIMATE_DELAY}ms`}

    return ( 
        <section style={stylePreload} className={`${animate} flex flex-col justify-center items-center gap-12 w-full h-full bg-Black-900`}>
            123
        </section>
    );
}

export default Preload;