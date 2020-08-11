import React, {useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const Cloud1 = ({pbRate})=>{
    const {ref, getAnimation} = useWebAnimations({
        keyframes:{
            transform:["translateX(1350px)", "translateX(-600px)"]
        },
        timing:{
            duration:50000,
            iterations: Infinity,
        }
    })
    useEffect(() => {
        getAnimation().updatePlaybackRate(pbRate);
        }
    ,)

    return(
        <div>
            <img ref = {ref} id = "cloud1" src = {require("../images/cloud2.png")} alt="cloud1"/>
        </div>
    ) 
}

export default Cloud1;