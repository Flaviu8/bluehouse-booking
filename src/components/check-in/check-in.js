import React from "react";
import {MainCheckinContainer, CheckInContainer,BackgroundCheckIn, CheckInFrame, CheckInDateFrame, CheckInGuestFrame, CheckInDateFrameInside, CheckInGuestFrameInside, SearchBtn} from "./check-in.style"
import iconCalendar from "../icons/calendar.svg"
import arrowIcon from "../icons/arrow.svg"
import personIcon from "../icons/person.svg"



const CheckIn = () => {
    return (
    <MainCheckinContainer>
    <CheckInContainer>
        <h5>BEST PRICE GUARANTEED</h5>
    </CheckInContainer>
        <BackgroundCheckIn>
                <h4>CHECK AVAILABILITY AND PRICES</h4>
                <CheckInFrame>
                    <CheckInDateFrame>
                            <img src={iconCalendar} alt="calendar"/>
                        <CheckInDateFrameInside>
                            <p>Check-in date</p>
                            <img src={arrowIcon} alt="arrow"/>
                        </CheckInDateFrameInside>
                    </CheckInDateFrame>
                    <CheckInDateFrame>
                            <img src={iconCalendar} alt="calendar"/>
                        <CheckInDateFrameInside>
                            <p>Check-in date</p>
                            <img src={arrowIcon} alt="arrow"/>
                        </CheckInDateFrameInside>
                    </CheckInDateFrame>
                    <CheckInGuestFrame>
                            <img src={personIcon} alt="person"/>
                        <CheckInGuestFrameInside>
                            <p>Guests</p>
                            <img src={arrowIcon} alt="arrow" />
                        </CheckInGuestFrameInside>
                    </CheckInGuestFrame>
                    <SearchBtn>
                        <p>SEARCH</p>
                    </SearchBtn> 
                </CheckInFrame>
        </BackgroundCheckIn>
    </MainCheckinContainer>
       
    
    )
} 

export default CheckIn