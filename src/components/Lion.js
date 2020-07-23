import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const Lion = () =>{
    const {ref, playState} = useWebAnimations({
        keyframes:{},
        timing:{}
    })

    return(
        <div>
            <img id = "lion" src = {require("../images/lion.gif")} alt="waqas"/>
        </div>
    )
}

export default Lion;