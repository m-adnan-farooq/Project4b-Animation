import React, {useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const Cloud3 = ({pbRate})=>{
    const {ref, getAnimation} = useWebAnimations({
        keyframes:{
            transform:["translateX(1000px)", "translateX(-600px)"]
        },
        timing:{
            duration:80000,
            iterations: Infinity,
        }
    })
    useEffect(() => {
        getAnimation().updatePlaybackRate(pbRate);
        console.log(pbRate)
        }
    ,)
    return(
        <div>
            <img ref = {ref} id = "cloud3" src = {require("../images/cloud2.png")} alt="cloud3"/>
        </div>
    ) 
}

export default Cloud3;