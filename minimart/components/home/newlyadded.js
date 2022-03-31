import numbro from "numbro";
import { Blank_loader, Cart_card } from "../../utility/components";
import Fetch_api from "../api";

numbro.zeroFormat("0");
numbro.setDefaults({
    spaceSeparated:true,
    thousandSeparated: true,
    mantissa: 2,
})


const Newlyadded = ()=>{
    const { items, isLoading, isError } = Fetch_api('/api/hello/')

    if (isLoading) {
        
        return(
            <>
                <div className='w-full py-2 bg-base-100 my-4'>
                    <p className='uppercase text-lg sm:text-2lg font-extrabold ml-3'>newly added <span className="badge badge-md bg-transparent border-warning text-warning border-[1px] py-1">NEW</span></p>
                </div>
                <div className='container px-4 mx-auto mb-7'>
                    <div className='flex overflow-x-auto pb-4 scroll-smooth snap-mandatory snap-x '>
                        {<Blank_loader lenght={5}/>}
                    </div>
                </div>
            </>
        )
    }
    if (isError) {
        return(
            <>
                <div className='w-full py-2 bg-base-100 my-4'>
                    <p className='uppercase text-lg sm:text-2lg font-extrabold ml-3'>newly added <span className="badge badge-md bg-transparent border-warning text-warning border-[1px] py-1">NEW</span></p>
                </div>
                <div className='container px-4 mx-auto mb-7'>
                    <div className='flex overflow-x-auto pb-4 scroll-smooth snap-mandatory snap-x '>
                        {<Blank_loader lenght={5}/>}
                    </div>
                </div>
            </>
        )
    }
    
    return(
        <>
            
            <div className='w-full py-2 bg-base-100 my-4'>
                <p className='uppercase text-lg sm:text-2lg font-extrabold ml-3'>newly added <span className="badge badge-md bg-transparent border-warning text-warning border-[1px] py-1">NEW</span></p>
            </div>
            <div className='container px-4 mx-auto mb-7'>
                <div className='flex overflow-x-auto pb-4 scroll-smooth snap-mandatory snap-x '>
                    {
                        items.map((eachItem, key)=>(
                            <Cart_card keys={key+"nw"}
                             key={key}
                             title={eachItem.title}
                             price={numbro(eachItem.price).format()}
                             image={eachItem.image}
                            />
                        ))
                    }
                </div>
                
            </div>
        
        </>
    )
}


export default Newlyadded;