
export const Button = (props)=>{
    return(
        <button className="btn btn-block btn-outline btn-warning hover:!bg-warning-content hover:!text-white">{props.text}</button>
    )
}

export const Blank_loader_body = ()=>{
    return(
        <div className="animate-pulse w-full">
            <div className="w-full bg-slate-700 h-[110px] sm:h-[150px] md:[h-200px]">
            </div>
            <div className="p-3 py-1">
                <div className="h-3 bg-slate-700 rounded"></div>
                <div className="mt-3 mb-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-slate-700 rounded col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Blank_loader = ({lenght, keys})=>{
    const blank = [];
    for (let index = 0; index <= lenght; index++) {
        var eachBlank = (
            <div key={index} className="card cursor-not-allowed w-40 sm:w-60 h-full mx-3 card-compact flex-none box-content flex snap-start bg-base-100 shadow-xl">
                <Blank_loader_body/>
            </div>
        )
        blank.push(eachBlank)
        
    }

    return blank;

}

export const Cart_card = ({title, price, image, keys})=>{
    return(
        <div className="card cursor-pointer w-40 sm:w-60 h-full mx-3 card-compact flex-none box-content flex snap-start bg-base-100 shadow-xl">
            <div style={{backgroundImage: `url(${(image)})`}} className="bg-center bg-cover bg-no-repeat w-full h-[110px] sm:h-[150px] md:[h-200px]">
            
            </div>
            <div className="card-body">
                <h2 className="text-sm sm:text-base text-ellipsis whitespace-nowrap overflow-hidden">{title}</h2>
                <p className="font-bold text-base">#{price}</p>
            </div>
        </div>
    )
}