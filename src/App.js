import { useState, useEffect } from "react";
import CardList from "./Components/card-box/card-list.component";
import "./App.css";
import SearchBox from "./Components/search-box/searchbox.component";

const App = () => {
  console.log("render 1");
  
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log(searchField);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  useEffect(() => {
    const newfilteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredmonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 id="app-title">Monsters Rolodex</h1>
      <SearchBox
        onchange={onSearchChange}
        classname="monsters search-box"
        placeholder="search monsters"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchfield: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchfield = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchfield };
//     });
//   };

//   render() {
//     const { monsters, searchfield } = this.state;
//     const { onSearchChange } = this;

//     const filteredmonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });

//     console.log("render");

//     return (
//       <div className="App">
//         <h1 id="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onchange={onSearchChange}
//           classname="monsters search-box"
//           placeholder="search monsters"
//         />

//         <CardList monsters={filteredmonsters} />
//       </div>
//     );
//   }
// }

// export default App;
