import { useSelector } from "react-redux";
import Lottie from '../../utility/components/lottie';
import loader from '../../utility/json/loader.json';

function Loader() {

    const loader_state = useSelector((state) => state.loader_state);

    return(
        <>
            <div className={`${loader_state.show===false ? 'hidden ' :''}fixed z-50 left-0 top-0 w-full h-full overflow-hidden`}>
                <div className="fixed left-0 top-0 bottom-0 right-0 backdrop-blur-md cursor-not-allowed"></div>
                <div className="min-h-full flex mx-auto p-5 w-[80%] justify-center items-center">
                    <Lottie 
                        json={loader}
                        styles={{height:300}}
                    />
                </div>
            </div>
        </>
    )

}

export default Loader;