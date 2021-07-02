import './search-box.styles.css';

const SearchBox = (props) =>{
    return (
        <input 
            type="search" 
            placeholder={props.placeholder}
            onChange={props.handleChange} 
            className="search"
        />
    );
}

export default SearchBox;