import styled from "@emotion/styled";
import img from "../images/check.svg"



export const MainCheckinContainer = styled.div`
    display: flex;
    margin: 22px 175px 0 177px;

`;


export const CheckInContainer = styled.div`
    width: 50px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    


    h5 {
        font-family: 'Oblik';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 50px;
        
        color: #14202B;
        opacity: 0.9;
        transform: rotate(180deg); 
        writing-mode: vertical-rl;
        
    }
`;

export const BackgroundCheckIn = styled.div`
    background-image: url(${img});
    height: 490px;
    width: calc(100% - 75px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:40%  90%;
    
    @media (max-width: 768px) {
        width: calc(100% - 250px);
    }

    & h4 {
        width: 395px;
        height: 156px;

        font-family: 'Oblik';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        /* or 125% */

        text-transform: uppercase;
        margin-top: 85px;
        margin-left: 29px;

        color: #FFFFFF;
        
    }

    `;


    export const CheckInFrame = styled.div`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 20px 30px;
        gap: 8px;

        width: 1360px;
        height: 99px;

        background: rgba(255, 255, 255, 0.46);
        border-radius: 4px;
        margin: auto;
        margin-top: 3em;
        
        
`;

export const CheckInDateFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 24px;
    gap: 8px;

    width: 222px;
    height: 58px;

    background: #FFFFFF;
    border-radius: 4px;
    margin-top: 0.5em;
    margin-left: 3em;

`;

export const CheckInDateFrameInside = styled.div`
    display: flex;
    gap: 52px;
& p {
    width: 108.41px;

    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    
}

`;


export const CheckInGuestFrameInside = styled.div`
    display: flex;
    gap: 52px;
& p {
    width: 108.41px;
    height: 17px;

    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
}

& img {
    margin-top: 10px;
}

`;

export const CheckInGuestFrame = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 24px;
        gap: 8px;

        width: 222px;
        height: 58px;

        background: #FFFFFF;
        border-radius: 4px;
        margin-top: 0.5em;
        margin-left: 3em;
    

`;

export const SearchBtn = styled.div`
        padding: 20px 44px;
        gap: 8px;
        padding: 10px 24px;
        width: 163px;
        height: 58px;

        /* Primary color */

        background: #1D3967;
        border-radius: 4px;
        margin-top: 0.5em;
        margin-left: 3em;

        & p{
            width: 75px;
            height: 18px;

            font-family: 'Josefin Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
            /* identical to box height */

            text-align: center;

            color: #FFFFFF;
            margin: 20px 44px 20px 44px;


        }
    
`;








