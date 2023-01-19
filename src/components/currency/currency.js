import React from "react";
import Dropdown from "../icons/dropdown.svg"
import { CurrencyMain } from "./currrency.style";


const Currency = () => {
    return (
        <CurrencyMain>
            <h5>CURRENCY</h5>
            <img src={Dropdown} alt="dropdown"/>
        </CurrencyMain>
    )
}


export default Currency