import React, {useState} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Cloud1 from './Cloud1';
import Cloud2 from './Cloud2';
import Cloud3 from './Cloud3';

const Background = () => {
    
    const [pbRate, setpbRate] = useState(1)
    
    const { ref, playstate, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ["translateX(0vw)", "translateX(-10vw)"]
        },
        timing: {
            duration: 1000,
            iterations: Infinity,
        },
        onReady: ({ playState, animate, animation }) => {
            setInterval(()=>{
                if(pbRate>=0.70){
                    animation.updatePlaybackRate(animation.playbackRate/1.05);
                    setpbRate(pbRate/1.05)
                }

            },2000)
          },
    })

    
    
    const updatePlaybackRate1 = () => {
        if (pbRate <= 8) {
            getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.1);
            setpbRate(pbRate * 1.1);
            
        }
    }

    return (
        <div onMouseDown={updatePlaybackRate1}>
            <img ref={ref} playstate = {playstate} id="background" src={require("../images/grass2.jpg")} alt="background" />
            <Cloud1 pbRate={pbRate}/>
            <Cloud2 pbRate={pbRate}/>
            <Cloud3 pbRate={pbRate}/>
        </div>
    )
}

export default Background;