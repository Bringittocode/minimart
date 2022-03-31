import Cart from "../cart";
import Footer from '../footer';
import Navbar from '../navbar';

const Body = (props)=>{
    return(
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/> 
                <div className="drawer-content h-full flex flex-col">
                    <Navbar/>
                    {props.component}
                    <Footer/>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 sm:w-80 bg-base-100">
                        <a className="btn btn-ghost uppercase justify-start items-start"><span className='text-warning font-bold text-xl pr-[3px]'>OAU</span></a> 
                        
                        <div tabIndex="0" className="collapse collapse-arrow bg-base-100 rounded-box bg-[hsl(220,13%,69%,0.1)]">
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


export default Body;