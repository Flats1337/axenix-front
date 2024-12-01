

function LineLink({names}) {
    return (  
        <div className="text-[14px] text-opacity-45">
            {names.join(" / ")}
        </div>
    );
}

export default LineLink;