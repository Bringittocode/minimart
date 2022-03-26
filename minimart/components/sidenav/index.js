import Cart from "../cart";

const Sidenav = (props)=>{
    return(
        <>
            <div className="drawer fixed top-0 w-[100vw] z-30">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/> 
                <div className="drawer-content h-full flex flex-col mt-[57px] pb-24">
                    
                </div>

                <div className="drawer-side pt-[57px]">
                    <label for="my-drawer-3" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-48 sm:w-80 bg-base-100">
                        
                        <div tabindex="0" className="collapse collapse-arrow bg-base-100 rounded-box bg-[hsl(220,13%,69%,0.1)]">
                            <input type="checkbox" className="peer"/>
                            <div className="collapse-title text-xl font-medium">
                                Cart
                            </div>
                            <div className="collapse-content px-2 bg-black rounded-b">
                                <div className="flex flex-col">
                                    <Cart/>
                                </div>
                            </div>
                        </div>
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                    </ul>
                </div>
            </div>
        
        </>
    )
}


export default Sidenav;