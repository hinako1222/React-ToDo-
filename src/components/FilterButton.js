function FilterButton(props){
return(
    <button type="button" className="btn toggle-btn" aria-pressed="true"　
    onClick={() => alert("hi!")}>
          <span className="visually-hidden">Show</span>
          <span>all</span>
          <span className="visually-hidden">tasks</span>
    </button>
        );
        }

export default FilterButton;