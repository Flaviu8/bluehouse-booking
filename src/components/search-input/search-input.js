import React from "react";
import { SearchInputMain, SearchInputComponent } from "./search-input.style";
import SearchIcon from "../icons/search.svg"



const SearchInput = () => {
    



    return (
        <SearchInputMain>
            <SearchInputComponent>
                <input type="text" placeholder="SEARCH"></input>
                <button><img src={SearchIcon} alt="search-icon"/></button>
            </SearchInputComponent>
        </SearchInputMain>
    )
}


export default SearchInput;