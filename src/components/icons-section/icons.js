import React from "react";
import { IconsMainContainer, EyeIcon, WifiIcon,EyeAnchor, WifiAnchor, BusAnchor, BusIcon, CarIcon, CarAnchor, AirplaneIcon, AirplaneAnchor, ClockIcon, ClockAnchor } from "./icons.style"
import Eye from "../icons/eye.svg"
import Wifi from "../icons/wi-fi.svg"
import Bus from "../icons/bus.svg"
import Car from "../icons/car.svg"
import Airplane from "../icons/airplane.svg"
import Clock from "../icons/clock.svg"
 

const Icons = () => {
    return (
        <IconsMainContainer>
            <EyeIcon>
                <img src={Eye} alt="eye"/>
                <EyeAnchor href="/">Popular Spot from Northern Lights</EyeAnchor>
            </EyeIcon>
            <WifiIcon>
                <img src={Wifi} alt="eye"/>
                <WifiAnchor href="/">Fast Free WiFi</WifiAnchor>
            </WifiIcon>
            <BusIcon>
                <img src={Bus} alt="eye"/>
                <BusAnchor href="/">3 Min Walk to Bus Stop</BusAnchor>
            </BusIcon>
            <CarIcon>
                <img src={Car} alt="eye"/>
                <CarAnchor href="/">10 Min Drive from Town</CarAnchor>
            </CarIcon>
            <AirplaneIcon>
                <img src={Airplane} alt="eye"/>
                <AirplaneAnchor href="/">45 Min Drive from Airport</AirplaneAnchor>
            </AirplaneIcon>
            <ClockIcon>
                <img src={Clock} alt="eye"/>
                <ClockAnchor href="/">Late Night Self Check In</ClockAnchor>
            </ClockIcon>

        </IconsMainContainer>
    )
}


export default Icons;