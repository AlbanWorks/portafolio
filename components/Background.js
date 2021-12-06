import React from 'react'
import Particles from "react-particles-js"
import BackgroundConfig from "./BackgroundConfig"

export default function ParticleBackground(){
    return(
        <Particles params={BackgroundConfig} />
    )
}