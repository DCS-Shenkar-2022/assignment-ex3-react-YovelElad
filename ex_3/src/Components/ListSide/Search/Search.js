import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        }


        this.searchFunc = this.searchFunc.bind(this);
    }

    saveInState(value) {
        this.setState(prevState => ({
            searchQuery: value
        }))
    }

    searchFunc(event) {
        event.preventDefault();
        // alert(event.targert.value);
        // alert(this.state.searchQuery);
        this.props.onSubmit(this.state.searchQuery);
    }

    render() {
        return (
            <div className="Search">
                <form>
                    {/* <TextField id="outlined-basic" label="Outlined1" variant="outlined" /> */}
                    <input onChange={(event) => this.saveInState(event.target.value)} className="searchBar" placeholder='Serach by name or location' />
                    {/* <svg data-testid="SearchIcon"></svg> */}
                    <button type="submit" onClick={this.searchFunc} >
                        <div id="searchIconFrame" className="iconFrame">
                            <SearchIcon className="SearchIcon" color="white" fontSize="large" />
                        </div>
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;