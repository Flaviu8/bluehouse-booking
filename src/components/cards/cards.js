import React from "react";
import { MainCard, ImageCard, InfoCard, LeftCard, MainInfoCard, LineContainer, RightContainer, TitleContainer, PriceContainer, CancelContainer, CheckAvailabilty } from "./cards.style";
import Bed from "../icons/bed.svg"
import Line from "../icons/line.svg"
import Bathroom from "../icons/bathroom.svg"
import Tv from "../icons/tv.svg"
import Wifi from "../icons/wifi.svg"
import Budget from "../icons/budget.svg"
import Breakfast from "../icons/breakfast.svg"
import Star from "../icons/star.svg"
import Info from "../icons/info.svg"



const Card = () => {
    return (
    <MainCard>
        <LeftCard >
        <ImageCard>
            <img src="https://media.xmlcal.com/pic/p0000/3578/16.png" alt=""/>
        </ImageCard>
        <MainInfoCard>
        <InfoCard>
            <img src={Bed} alt="bed" />
            <p>Queen Size Bed</p>
        </InfoCard>
        <InfoCard>
            <img src={Bathroom} alt="bed"/>
            <p>Shared Bathroom</p>
        </InfoCard>
        <InfoCard>
            <img src={Tv} alt="bed"/>
            <p>Netflix TV</p>
        </InfoCard>
        <InfoCard>
            <img src={Wifi} alt="bed"/>
            <p>Free Fast WiFi</p>
        </InfoCard>
        <InfoCard>
            <img src={Budget} alt="bed"/>
            <p>Budget friendly</p>
        </InfoCard>
        <InfoCard>
            <img src={Breakfast} alt="bed"/>
            <p>Self Service Breakfast</p>
        </InfoCard>
        </MainInfoCard>
        <LineContainer>
            <img src={Line} alt="line"></img>
        </LineContainer>
        <RightContainer >
            <p>4.5</p>
            <img src={Star} alt="star"/>
            <p>(465 <a href="/">reviews</a>)</p>
        </RightContainer>
            <TitleContainer>
                <h4>Starting from</h4>
                <PriceContainer>
                    <span>$ 78<span>/night</span></span>
                </PriceContainer>
                <CancelContainer>
                    <p>14 day cancellation</p>
                    <img src={Info} alt="info"/>
                </CancelContainer>
                <CheckAvailabilty>
                    <span>CHECK AVAILABILITY</span>
                </CheckAvailabilty>
            </TitleContainer>
        </LeftCard>
    </MainCard>
    )
}

export default Card;


