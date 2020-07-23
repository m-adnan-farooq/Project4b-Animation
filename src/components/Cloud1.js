import React, {useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const Cloud1 = ({pbRate})=>{
    const {ref, getAnimation} = useWebAnimations({
        keyframes:{
            transform:["translateX(1350px)", "translateX(-600px)"]
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
            <img ref = {ref} id = "cloud1" src = {require("../images/cloud2.png")} alt="cloud1"/>
        </div>
    ) 
}

export default Cloud1;