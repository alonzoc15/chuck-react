import React, { Component } from 'react';
import Quote from './components/quotes';

import './App.css';

class App extends Component {
    state = {
        category: 'dev'
    };

    changeCategory = () => {
        this.setState({
            category: 'sport'
        })
    };

    render() {
        const { category } = this.state;
        return ( 
            <div className = "App" >
                <Quote  category={category} />
                <br />
                <button onClick={() => this.changeCategory}>
                Change category
                </button>
            </div>
        );
    }
}

export default App;