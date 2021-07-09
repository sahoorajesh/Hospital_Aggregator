import React from "react";

const Search = () => {
    return (
       
        <div>
            <form>
                
                <input className="black pa2 mv2" type="text" placeholder="Search.." name="search"/>
                <button className="black pa2 ma2" type="submit"><i className="fa fa-search "></i></button>
            </form>
        </div>
    );
}

export default Search;