import { useEffect, useState } from "react";

function TitleTable({name}) {
    let style = "flex-1"

    if (name === "ID") {
        style = "w-[20px]"
    }

    return (
        <h2 className={`${style} px-[2px] text-[10px]`}>
            {name}
        </h2>
    );
}

function ItemTable({index, name}) {
    let style = "flex-1"

    if (index === 0) {
        style = "w-[20px]"
    }

    return (
        <p className={`${style} px-[2px] text-[10px]`}>
            {name}
        </p>
    );
}

function RowTable({data}) {

    return (
        <div className="flex items-stretch w-full border-Black-900 border-b-[2px] border-opacity-25 divide-x divide-Black-900 divide-opacity-25">
            {data.map((data, i) => <ItemTable key={"ItemTable" + i} index={i} name={data} />)}
        </div>
    );
}

function Table({state, model, getData, name}) {
    const [data, setData] = useState(null);

    useEffect(()=> {
        if (!data) {
            setData(getData(name));
        }
    }, [data])
    
    return ( 
        <section className="h-full w-full border-[2px] border-Black-900 border-opacity-15">
            <div className="flex items-stretch border-Black-900 border-b-[2px] border-opacity-25 divide-x divide-Black-900 divide-opacity-25">
                {model.map((data, i) => <TitleTable key={"tableLine" + i} name={data} />)}
            </div>
            <div>
                {state._dataTable.map((data, i) => <RowTable key={"RowTable" + i} data={data} />)}
            </div>
        </section>
    );
}

export default Table;