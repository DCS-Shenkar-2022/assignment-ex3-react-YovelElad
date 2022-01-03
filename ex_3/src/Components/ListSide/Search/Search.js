import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Search">
                <form>
                {/* <TextField id="outlined-basic" label="Outlined1" variant="outlined" /> */}
                    <input className="searchBar" placeholder='Serach by name or location'  />
                    {/* <svg data-testid="SearchIcon"></svg> */}
                <div id="searchIconFrame"className="iconFrame">
                    <SearchIcon className="SearchIcon" color="white" fontSize="large"/>

                </div>
                </form>
            </div>
        )
    }
}

export default Search;