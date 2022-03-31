import { useLottie } from "lottie-react";

const Lottie = ({json, styles}) => {
    const style = {
        ...styles,
        cursor: "not-allowed",
        pointerEvents: "none"
    };

    const options = {
        animationData: json,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { View, setSpeed } = useLottie(options, style);
    setSpeed(3);
    return View;
};

export default Lottie;