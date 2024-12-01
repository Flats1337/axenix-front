import { useState } from "react";

function Input({type, name, onChangeEvent, style = null, defaulValue = "", placeholder = null, isDisable = null}) {
    const Type = type;
    const Name = name;
    const Style = style || "";
    const [value, setValue] = useState(defaulValue);
    const Placeholder = placeholder || "";
    const IsDisable = isDisable || false;
    
    let OnChangeEvent = (e) => { 
        setValue(e.target.value);
        onChangeEvent(e);
    };

    return ( 
        <>
            <input  type={Type}
                    name={Name}
                    className={Style}
                    placeholder={Placeholder} 
                    disabled={IsDisable}
                    value={value}
                    onChange={OnChangeEvent} /> 
        </>
    );
}

export default Input;