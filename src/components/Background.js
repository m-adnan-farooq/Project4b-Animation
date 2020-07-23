import React, {useState} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Cloud1 from './Cloud1';
import Cloud2 from './Cloud2';
import Cloud3 from './Cloud3';

const Background = () => {
    const { ref, playstate, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ["translateX(0vw)", "translateX(-10vw)"]
        },
        timing: {
            duration: 1000,
            iterations: Infinity,
        }
    })
    const [pbRate, setpbRate] = useState(1)
    const updatePlaybackRate = () => {
        if (pbRate <= 11) {
            getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.1);
            setpbRate(pbRate * 1.1);
        }
    }

    return (
        <div onMouseDown={updatePlaybackRate}>
            <img ref={ref} id="background" src={require("../images/grass2.jpg")} alt="background" />
            <Cloud1 pbRate={pbRate}/>
            <Cloud2 pbRate={pbRate}/>
            <Cloud3 pbRate={pbRate}/>
        </div>
    )
}

export default Background;