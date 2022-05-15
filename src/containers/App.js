import React, {Component} from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll'




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
        console.log('constructor');
    }
componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
                .then(users => this.setState({robots: users}));
}


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (!this.state.robots.length) {
            return <h1>Loading...</h1>
        }else {
            return (
                <div className='tc'>
                    <h1>Robot Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;