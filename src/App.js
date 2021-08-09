import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/homepage.compoent';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
        </Switch>
    )
}

// import CardList from './components/card-list/card-list-component'
// import SearchField from './components/search-box/search-box.component';
// import './App.css'
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: [],
//             filteredMonsters: [],
//             searchField: ""
//         }
//     }
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => {
//                 if (users && users.length > 0) {
//                     this.setState({ monsters: users, filteredMonsters: users })
//                 }
//             })
//     }
//     searchMonsters = (searchText) => {
//         let { monsters, filteredMonsters } = this.state;
//         if (filteredMonsters && filteredMonsters.length > 0) {
//             monsters = filteredMonsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
//         }
//         this.setState({ monsters })
//     }
//     render() {
//         const { monsters, searchField, filteredMonsters } = this.state;
//         return (
//             <div className="App">
//                 <SearchField type='search' placeholder='search monster' handleChange={e => this.searchMonsters(e.target.value)} />
//                 <CardList monsters={monsters} />
//             </div>
//         )
//     }
// }

export default App;