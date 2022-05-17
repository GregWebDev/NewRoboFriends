import React, {  useState, useEffect } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/componentErrorBoundry";




function App() {
       const [robots, setRobots]   =   useState ([]);
       const [searchfield, setSearchField] = useState('');
       useEffect(()=> {
           fetch('https://jsonplaceholder.typicode.com/users')
               .then(response=>response.json())
               .then(users => {setRobots(users)});
       },[])
    const onSearchChange= (event) => {
        setSearchField(event.target.value)
       };
       const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !robots.length ?
            <h1>Loading...</h1>:
                (
                    <div className='tc'>
                        <h1>Robot Friends</h1>
                        <Searchbox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundry>
                        </Scroll>
                   </div>);
};


export default App;