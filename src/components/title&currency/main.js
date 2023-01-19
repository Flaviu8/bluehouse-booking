import React from "react";
import Currency from "../currency/currency";
import Title from "../title/title";



const MainSection = () => {
    return (
        <div style={{display: "flex", justifyContent:"space-between", width: "90%"}}>
            <Title />
            <Currency />
        </div>
    )
}


export default MainSection