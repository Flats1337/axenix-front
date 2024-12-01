function Button({children, type, name, style = null, Text = "", isDisable = null, onClickEvent = null}) {
    const Type = type;
    const Name = name;
    const Style = style || "";
    const IsDisable = isDisable || false;

    return ( 
        <button type={Type}
                name={Name}
                className={Style}
                disabled={IsDisable}
                onClick={onClickEvent}>
            {children}
        </button>
    );
}

export default Button;