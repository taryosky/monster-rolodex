import './App.css';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){ 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(resjson => this.setState({monsters: resjson}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(x=> x.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters..." handleChange={this.handleChange} />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
