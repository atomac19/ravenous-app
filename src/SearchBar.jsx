import './SearchBar.css';

function SearchBar() {
    return (
        <div class="searchbar-container">
            <div id="title-bar">ravenous</div>
            <div class="searchbar-buttons">
                <button>Best<br/>Match</button>
                <button>Highest<br/>Rated</button>
                <button>Most<br/>Reviewed</button>
            </div>
            <hr />
            <div class="searchbar-inputs">
                <input placeholder="Search Businesses" height="45"></input>
                <input placeholder="Where?"></input>
            </div>
            <button id="search">Let's Go</button>
        </div>
    );
}


export default SearchBar;