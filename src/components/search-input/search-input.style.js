import styled from "@emotion/styled";



export const SearchInputMain = styled.div`
    position: absolute;
    top: 4em;
    right: 1em;
    display: flex;
    
   
`;

export const SearchInputComponent = styled.div`
        border: 2px solid black;
        width: 300px;
        height: 60px;
        display: flex;
    
    
    & input {
        width: 250px;
        height: 60px;
        padding-left: 1em;
        font-size: large;
        border: none;
        align-items: center;
    }

    & img {
        width: 40px;
        height: 60px;
        background-color: #FFFFFF;
    }

    & button {
        border: none;
        width :50px;
        height: 50px;
        background-color: #FFFFFF;
    }

`;