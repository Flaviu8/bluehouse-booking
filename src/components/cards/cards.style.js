import styled from "@emotion/styled";



export const MainCard = styled.div`
        margin: auto;
        width: 81%;
        height: 360px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.23);
        margin-top: 1em;
        margin-bottom: 3em;

`;
export const LeftCard = styled.div`
      display: flex;
      

`;


export const ImageCard = styled.div`
      & img {
        
        width: 360px;
        height: 360px;
       
      }

`;

export const MainInfoCard = styled.div`
      display: block;
`;

export const InfoCard = styled.div`
      display: flex;
      align-items: center;
      margin-top: 15px;
      margin-left: 50px;

      & p {
        width: 172.98px;
        height: 16px;

        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 16px;
        /* identical to box height, or 89% */

        margin-left: 10px;
        color: #14202B;
      }
      
`;

export const LineContainer = styled.div`
      margin: 20px 0 0 350px;
`;

export const RightContainer = styled.div`
      display: flex;
      align-items: center;
      position: absolute;
      right: 220px;
      margin-top: 20px;
      & img {
        width: 16px;
        height: 16px;
        margin-left: 8px;
        margin-right: 8px;
      }

      & a {
            width: 95px;
            height: 16px;

            font-family: 'Josefin Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            /* identical to box height */


            color: #14202B;
      }
`;

export const TitleContainer = styled.div`
     margin-left: 8em;
     margin-top: 3em;
& h4 {
      width: 112px;
      height: 40px;

      font-family: 'Josefin Sans';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 50px;
      /* or 312% */


      /* text colour */

      color: #14202B;


}

      

`;

export const PriceContainer = styled.div`
            margin-top: 42px;
            margin-left: 3em;
      & span {
                  width: 160px;
                  height: 50px;
                  font-family: 'Josefin Sans';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 48px;
                  line-height: 50px;
                  /* identical to box height, or 104% */
                  text-align: right;

                  /* text colour */

                  color: #14202B;
            }

            & span :nth-of-type(1) {
                  font-size: 24px;
                  font-family: 'Josefin Sans';
                  font-style: normal;
                  font-weight: 400;
                  line-height: 50px;
                  /* identical to box height, or 104% */
                  text-align: right;

                  /* text colour */

                  color: #14202B;
            }

`;

export const CancelContainer = styled.div`
            display: flex;
            margin-left: 3em;
      & p {
            width: 137px;
            height: 30px;

            font-family: 'Josefin Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            /* identical to box height, or 188% */

            text-align: right;

            color: #008000;
      }

      & img {
            position: absolute;
            right: 405px;
      }
`;

export const CheckAvailabilty = styled.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 18px;
      gap: 8px;
      margin-top: 48px;
      margin-left: 1em;

      width: 235px;
      height: 48px;

      /* Primary color */

      background: #1D3967;

      & span {
            width: 189px;
            height: 24px;

            font-family: 'Josefin Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            /* identical to box height, or 133% */

            display: flex;
            align-items: center;
            text-align: center;
            text-transform: uppercase;

            /* white */

            color: #FFFFFF;
      }
      
`;