function Textarea({name, styleClass = null, style = null, cols = null, placeholder = null, isDisable = null, onInputEvent = null}) {
    const Name = name;
    const StyleClass = styleClass || "";
    const Style = style || "";
    const Cols = cols || 1;
    const Placeholder = placeholder || "";
    const IsDisable = isDisable || false;
    
    let OnInputEvent = (e) => { 
        if (onInputEvent) {
            onInputEvent(e);
        }
    };

    return ( 
        <>
            <textarea className={StyleClass}
                    style={Style}
                    cols={Cols}
                    placeholder={Placeholder} 
                    name={Name}
                    disabled={IsDisable}
                    onInput={OnInputEvent}>

            </textarea>
        </>
    );
}

export default Textarea;