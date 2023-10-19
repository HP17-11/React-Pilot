import "./searchbox.styles.css";

const SearchBox = ({ onchange, classname, placeholder }) => {
  /* const { onchange,classname,placeholder } = props; instead of passing 
  props as argument in callback(const SearchBox = (props)=> {}...), we can directly pass the variable which allows us to 
  skip the destructuring of variables.
   */
  return (
    <input
      className={`search-box ${classname}`}
      type="search"
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};
export default SearchBox;

// class SearchBox extends Component {
//   render() {
//     //console.log(this.props);
//     const { onchange, placeholder, classname } = this.props;

//     return (
//       <input
//         className={`search-box ${classname}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onchange}
//       />
//     );
//   }
// }

// export default SearchBox;
